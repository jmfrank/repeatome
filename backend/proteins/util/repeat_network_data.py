import json
import sys
from proteins.models import Repeat, ProteinRepeats
import math

def GetNetworkData(organism):
    # Define data
    data = {
        'options': { 'type': "mixed", 'multi': False, 'allowSelfLoops': True }, # optional
        'attributes': {}, # optional graph-level attributes
        "nodes": [],
        "edges": []
    }
    
    # Get enrichment data
    print(organism)
    enrichment_data = {}
    for protrep in ProteinRepeats.objects.all():
        if protrep.repeat.parent_repeat == None:
            if not protrep.motif_enrichment == None:
                enrichment_float = float(protrep.motif_enrichment)
            else:
                enrichment_float = 0.0
            if not protrep.repeat.name in enrichment_data.keys():
                enrichment_data[protrep.protein.gene + '_' + protrep.repeat.name] = enrichment_float
    
    # Normalize enrichment from 7 to 35
    # log_vals = {k: math.log2(v) for k, v in enrichment_data.items() if v > 0}
    # x_min = min(log_vals.values())
    # x_max = max(log_vals.values())
    # enrichment_normalized = {}
    # for k, v in enrichment_data.items():
    #     if v > 0:
    #         enrichment_normalized[k] = 7 + (math.log2(v) - x_min) * (25 - 7) / (x_max - x_min)
    #     else:
    #         enrichment_normalized[k] = 7
    x_min = min(enrichment_data.values())
    x_max = max(enrichment_data.values())
    enrichment_normalized = {}
    for k, v in enrichment_data.items():
        enrichment_normalized[k] = 7 + (v - x_min) * (25 - 7) / (x_max - x_min)
    # print(x_min, x_max)
    # print(list(enrichment_normalized.values()))
    
    repeats = {}
    for protrep in ProteinRepeats.objects.all():
        if protrep.protein.gene + '_' + protrep.repeat.name in enrichment_normalized.keys():
            if not protrep.repeat.name in repeats.keys():
                repeats[protrep.repeat.name] = {'repeat_data': protrep.repeat, 'proteins': [protrep.protein], 'enrichment': [enrichment_normalized[protrep.protein.gene + '_' + protrep.repeat.name]]}
            else:
                repeats[protrep.repeat.name]['proteins'].append(protrep.protein)
                repeats[protrep.repeat.name]['enrichment'].append(enrichment_normalized[protrep.protein.gene + '_' + protrep.repeat.name])
    # print(repeats)
    
    # Loop through repeats
    spacing_x = 0
    spacing_y = 0
    for repeat_name in repeats.keys():
        repeat = repeats[repeat_name]['repeat_data']
        # print(repeat_name, repeats[repeat_name]['enrichment'])
        if repeat.parental_organism:
            if repeat.parental_organism.id == organism:
                # print(repeat)
                # Getting protein data for one repeat
                REP_SIZE = 40
                repeat_data = { 'key': repeat.name, 'attributes': { 'node_type': 'repeat', 'label': repeat.name, 'aliases': repeat.aliases_as_str(), 'dfam_id': repeat.dfam_id, 'x': spacing_x, 'y': spacing_y, 'size': REP_SIZE, 'color': 'rgb(140, 90, 230)', 'zIndex': 100, 'url': '/repeatTable/' + repeat.slug} }

                # Figure out x and y spacing to make them show up in a circle
                protein_lst = []
                enrichments = []
                for i in range(len(repeats[repeat_name]['proteins'])):
                    p = repeats[repeat_name]['proteins'][i]
                    if (not p.gene_type == None and 'TF' in p.gene_type) or p.parent_organism.id == 7227:
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
                data["nodes"].append(repeat_data)

                # Add proteins to data
                PROT_SIZE = 7
                EDGE_SIZE = 3
                # proteins = repeats[repeat_name]['proteins']
                for i in range(len(protein_lst)) :
                    if protein_lst[i].gene_family:
                        gene_fam = protein_lst[i].gene_family.gene_family
                    else:
                        gene_fam = 'None'
                    data["nodes"].append({ 'key': protein_lst[i].gene + '_' + repeat.name, 'attributes': { 'node_type': 'protein', 'label': protein_lst[i].gene, 'aliases': protein_lst[i].aliases_as_str(), 'gene_family': gene_fam, 'enrichment': enrichment_data[protein_lst[i].gene + '_' + repeat.name],'x': x_data[i], 'y': y_data[i], 'size': enrichment_normalized[protein_lst[i].gene + '_' + repeat.name], 'color': "#D44657", 'url': '/proteinTable/' + protein_lst[i].slug}})
                    data["edges"].append({ 'key': protein_lst[i].gene + '_' + repeat.name + '_edge', 'source': repeat.name, 'target': protein_lst[i].gene + '_' + repeat.name, 'attributes': { 'size': EDGE_SIZE, 'color': 'black' }})

                spacing_x += 225
                spacing_x = spacing_x % 1125
                if spacing_x == 0:
                    spacing_y -= 210
        
    # print(data)

    # Write data to json file
    file_str = 'frontend/static/repeat_network_db_' + str(organism) + '.json'
    with open(file_str, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)

