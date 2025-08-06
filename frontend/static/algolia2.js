// import algoliasearch from 'algoliasearch/lite';
// import { autocomplete } from '@algolia/autocomplete-js';

export default async function initAutocomplete() {
    const searchClient = algoliasearch('XSSHY1QSOB', 'ec5b5984639b89c7c5fd3cfe1bb4ebdd');

    const proteinIndex = searchClient.initIndex('ProteinTF_dev');
    const repeatIndex = searchClient.initIndex('Repeat_dev');
    const referenceIndex = searchClient.initIndex('Reference_dev');
    const organismIndex = searchClient.initIndex('Organism_dev');

    console.log('algoliasearch:', typeof algoliasearch);
    console.log('searchClient:', searchClient);
    console.log('index:', proteinIndex);
    console.log('autocomplete:', typeof autocomplete);

    autocomplete({
        container: '#algolia-search-input', // still required, but will wrap around input
        detachedMediaQuery: 'none',             // disables fullscreen modal mode
        placeholder: 'Search a protein or repeat',
        // openOnFocus: true,
        autoselectOnBlur: window.mobilecheck(),
        autoSelect: true,
        minLength: 2,
        inputElement: document.querySelector('#algolia-search-input'),
        // plugins: [redirectUrlPlugin],
        onSubmit({ state }) {
            console.log("STATE: ", state)
            window.location.href = '/search/?q=' + state.query
        },
        getSources({ query }) {
            return [
            {
                sourceId: 'proteinTF',
                getItems() {
                    return proteinIndex.search(query, { hitsPerPage: 4 }).then(res => {
                        // console.log('Search results:', res.hits);
                        return res.hits;
                    });
                },
                templates: {
                header({ html }) {
                    return html`<div class="aa-header">Proteins</div>`;
                },
                item({ item, html }) {
                    var str = item.gene;
                    return html`<a href='/proteinTable/${item.slug}'><div>${str}</div></a>`;
                }
                },
                onSelect({ item }) {
                    // Triggered on selection (click or enter)
                    window.location.href = '/proteinTable/' + item.slug;
                }
            },
            {
                sourceId: 'repeat',
                getItems() {
                return repeatIndex.search(query, { hitsPerPage: 3 }).then(res => res.hits);
                },
                templates: {
                header({ html }) {5
                    return html`<div class="aa-header">Repeat</div>`;
                },
                item({ item, html }) {
                    var str = item.name;
                    return html`<a href='/repeatTable/${item.slug}'><div>${str}</div></a>`;
                }
                },
                onSelect({ item }) {
                    window.location.href = '/repeatTable/' + item.slug;
                }
            },
            {
                sourceId: 'reference',
                getItems() {
                return referenceIndex.search(query, { hitsPerPage: 3 }).then(res => res.hits);
                },
                templates: {
                header({ html }) {
                    return html`<div class="aa-header">Reference</div>`;
                },
                item({ item, html }) {
                    var str = item.title;
                    return html`<a href='${item.url}'><div>${str}</div></a>`;
                }
                },
                onSelect({ item }) {
                    window.location.href = item.url;
                }
            },
            {
                sourceId: 'organism',
                getItems() {
                return organismIndex.search(query, { hitsPerPage: 3 }).then(res => res.hits);
                },
                templates: {
                header({ html }) {
                    return html`<div class="aa-header">Organism</div>`;
                },
                item({ item, html }) {
                    var str = item.scientific_name;
                    return html `<a href='${item.url}'><div>${str}</div></a>`;
                }
                },
                onSelect({ item }) {
                    window.location.href = item.url;
                }
            },
            ];
        }
    });
}