import json
import sys
from proteins.models import Repeat, MotifRepeat, Organism
import math

def GetEnrichmentData(organism, threshold):
    # Define data
    data = []
   
    # Get enrichment data
    print(organism)
    enrichment_data = {}
    repeats = {}
    for motif_repeat in MotifRepeat.objects.all():
        motif = motif_repeat.motif
        repeat = motif_repeat.repeat

        if repeat.parent_repeat is None \
            and repeat.parental_organism is not None \
            and repeat.parental_organism.id == organism \
            and motif_repeat.motif_enrichment is not None:
                print(f"Found motif_repeat: {motif_repeat.motif.motif_id} - {motif_repeat.repeat.name} - {motif_repeat.motif_enrichment}")
                enrichment_float = float(motif_repeat.motif_enrichment)
                if (not repeat.name in enrichment_data) and enrichment_float > threshold:
                    enrichment_data[motif.protein.gene + '_' + repeat.name] = enrichment_float

        # if repeat.parent_repeat is None \
        #     and motif.protein.parent_organism is not None \
        #     and motif.protein.parent_organism.id == organism \
        #     and motif_repeat.motif_enrichment is not None:
        #         enrichment_float = float(motif_repeat.motif_enrichment)
        #         if (not repeat.name in enrichment_data) and enrichment_float > threshold:
        #             enrichment_data[motif.protein.gene + '_' + repeat.name] = enrichment_float


    # Normalize enrichment from 7 to 35
    log_values = [math.log2(v) if v > 0 else 0 for v in enrichment_data.values()]
    x_min = 0
    x_max = 10
    if (len(log_values) > 0):
        x_min = min(log_values)
        x_max = max(log_values)
    
    MIN_SIZE = 7
    MULTIPLIER = 35

    enrichment_normalized = {}
    for k, v in enrichment_data.items():
        log_v = math.log2(v) if v > 0 else 0
        if x_max == x_min:
           x_min = 1
           x_max = 10
        norm = (log_v - x_min) / (x_max - x_min)
        norm = norm ** 2
        enrichment_normalized[k] = MIN_SIZE + norm * MULTIPLIER

    repeats = {}
    for motif_repeat in MotifRepeat.objects.all():
        motif = motif_repeat.motif
        repeat = motif_repeat.repeat

        if repeat.parent_repeat is None \
            and repeat.parental_organism is not None \
            and repeat.parental_organism.id == organism \
            and motif_repeat.motif_enrichment is not None:

        # if repeat.parent_repeat is None \
        #     and motif.protein.parent_organism is not None \
        #     and motif.protein.parent_organism.id == organism \
        #     and motif_repeat.motif_enrichment is not None:

                key = motif.protein.gene + '_' + repeat.name
                if key in enrichment_normalized.keys():
                    if not repeat.name in repeats:
                        repeats[repeat.name] = {
                            'repeat_data': repeat, 
                            'proteins': [motif.protein], 
                            'enrichment': [enrichment_normalized[motif.protein.gene + '_' + repeat.name]]}
                    else:
                        repeats[repeat.name]['proteins'].append(motif.protein)
                        repeats[repeat.name]['enrichment'].append(enrichment_normalized[motif.protein.gene + '_' + repeat.name])
   
    # Loop through repeats
    spacing_x = 0
    spacing_y = 0
    for repeat_name in repeats.keys():
        repeat = repeats[repeat_name]['repeat_data']
        # print(repeat_name, repeats[repeat_name]['enrichment'])
        # if repeat.parental_organism:
        #     if repeat.parental_organism.id == organism:
        # print(repeat)
        # Getting protein data for one repeat
        REP_SIZE = 50
        repeat_data = { 
            'key': repeat.name, 
            'attributes': { 
                'node_type': 'repeat', 
                'label': repeat.name, 
                'aliases': repeat.aliases_as_str(), 
                'dfam_id': repeat.dfam_id, 
                'x': spacing_x, 
                'y': spacing_y, 
                'size': REP_SIZE, 
                'color': 'rgb(140, 90, 230)', 
                'zIndex': 100, 
                'url': '/repeatTable/' + repeat.slug
            } 
        }

        # Figure out x and y spacing to make them show up in a circle
        protein_lst = []
        enrichments = []
        for i in range(len(repeats[repeat_name]['proteins'])):
            p = repeats[repeat_name]['proteins'][i]
            # print(p.gene, repeats[repeat_name]['enrichment'][i])
            # if (not p.gene_type == None and 'TF' in p.gene_type) or p.parent_organism.id == 7227:
            if repeats[repeat_name]['enrichment'][i] > 0.5:
                protein_lst.append(p)
                enrichments.append(repeats[repeat_name]['enrichment'][i])
        if len(protein_lst) == 0:
            continue
        # each_angle = 360 / len(protein_lst)
        START_ANGLE = 45
        EDGE_LENGTH = 90
        total_size = sum(enrichments)
        # enrichments = repeats[repeat_name]['enrichment']
        angles = []
        for i in range(len(enrichments)):
            prev = enrichments[i]
            curr = enrichments[i + 1] if i < len(enrichments)-1 else enrichments[len(enrichments)-1]
            avg = (prev + curr) / 2
            angle = (avg / total_size) * 360
            angles.append(angle)
        x_data = []
        y_data = []
        i = START_ANGLE
        indx = 0
        for angle in angles:
            minSeparationRadians = 2 * math.asin(enrichments[indx] / EDGE_LENGTH)
            # if angle*math.pi/180 < minSeparationRadians:
            #     # print('override', repeat.name, angle*math.pi/180, minSeparationRadians)
            #     requiredRadius = 0.95 * enrichments[indx] / (math.sin(angle*math.pi / 360))
            #     # print('  ', requiredRadius)
            # else:
            requiredRadius = EDGE_LENGTH
            x_data.append(requiredRadius * math.cos(i*math.pi/180) + spacing_x)
            y_data.append(requiredRadius * math.sin(i*math.pi/180) + spacing_y)
            i += angle
            indx += 1


        # Add repeat to data
        data.append(repeat_data)


        # Add proteins to data
        PROT_SIZE = 7
        EDGE_SIZE = 3
        # proteins = repeats[repeat_name]['proteins']
        for i in range(len(protein_lst)) :
            if protein_lst[i].gene_family:
                gene_fam = protein_lst[i].gene_family.gene_family
            else:
                gene_fam = 'None'
            if enrichment_data[protein_lst[i].gene + '_' + repeat.name] > 0.01:
                data.append({ 'key': protein_lst[i].gene + '_' + repeat.name, 'attributes': { 'node_type': 'protein', 'label': protein_lst[i].gene, 'aliases': protein_lst[i].aliases_as_str(), 'gene_family': gene_fam, 'universal_id': protein_lst[i].universal_id or protein_lst[i].gene.upper(), 'enrichment': enrichment_data[protein_lst[i].gene + '_' + repeat.name],'x': x_data[i], 'y': y_data[i], 'size': enrichment_normalized[protein_lst[i].gene + '_' + repeat.name], 'color': "#292BA5", 'url': '/proteinTable/' + protein_lst[i].slug}, 'organism': organism})
            # data["edges"].append({ 'key': protein_lst[i].gene + '_' + repeat.name + '_edge', 'source': repeat.name, 'target': protein_lst[i].gene + '_' + repeat.name, 'attributes': { 'size': EDGE_SIZE, 'color': 'black' }})


        spacing_x += 225
        spacing_x = spacing_x % 1125
        if spacing_x == 0:
            spacing_y -= 210
       
    # print(data)
    return data


def GetNetworkData(organism, threshold):
    data = GetEnrichmentData(organism, threshold)
    print(f"Saving network data for organism {organism} with {len(data)} nodes")
    # Write data to json file
    file_str = 'frontend/static/network/repeat_network_db_' + str(organism) + '.json'
    with open(file_str, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)

    return data


def GetNetworkDataAll(threshold):
    print("GET ALL NETWORK DATA")
    # Lookup network data for unique proteins across all organisms
    protein_dict = dict()
    for organism in Organism.objects.all():
        one_org_data = GetNetworkData(organism.id, threshold)
        for item in one_org_data:
            if item['attributes']['node_type'] == 'protein':
                universal_id = item['attributes']['universal_id']
                if universal_id in protein_dict:
                    protein_dict[universal_id].append(item)
                else:
                    protein_dict[universal_id] = [item]
    
    print(f"protein_dict size = {len(protein_dict)}")

    protein_to_protein_links = set()
    for universal_id, protein_nodes in protein_dict.items():
        if len(protein_nodes) < 1:
            continue
        print(f"Found {len(protein_nodes)} protein_nodes with universal_id {universal_id}")
        for left_node in protein_nodes:
            for right_node in protein_nodes:
                # Only link proteins from different organisms
                if left_node['organism'] == right_node['organism']:
                    continue
                if left_node['key'] == right_node['key']:
                    continue
                link = (left_node['key'], right_node['key'])
                protein_to_protein_links.add(link)
                print(f"Found protein-protein LINK: {link}")

    print(f"protein_to_protein_links size = {len(protein_to_protein_links)}")

    # Write data to json file
    protein_to_protein_links = list(protein_to_protein_links)
    file_str = 'frontend/static/multi_org_network/repeat_network_db_all.json'
    print(f"Writing {len(protein_to_protein_links)} links to {file_str}")
    with open(file_str, 'w', encoding='utf-8') as json_file:
        json.dump(protein_to_protein_links, json_file, indent=4, ensure_ascii=False)
