import json
import sys
from proteins.models import Repeat, ProteinRepeats, Organism
import math

def GetEnrichmentData(organism, threshold):
    # Define data
    data = []
   
    # Get enrichment data
    print(organism)
    enrichment_data = {}
    for protrep in ProteinRepeats.objects.all():
        if protrep.repeat.parent_repeat == None and protrep.repeat.parental_organism != None:
            if protrep.repeat.parental_organism.id == organism:
                if not protrep.motif_enrichment == None:
                    enrichment_float = float(protrep.motif_enrichment)
                
                    if (not protrep.repeat.name in enrichment_data.keys()) and enrichment_float > threshold:
                        enrichment_data[protrep.protein.gene + '_' + protrep.repeat.name] = enrichment_float
    # print(enrichment_data)
    # Normalize enrichment from 7 to 35
    # log_vals = {-k: math.log2(v) for k, v in enrichment_data.items() if v > 0}
    # x_min = min(log_vals.values())
    # x_max = max(log_vals.values())
    # enrichment_normalized = {}
    # for k, v in enrichment_data.items():
    #     if v > 0:
    #         enrichment_normalized[k] = 7 + (math.log2(v) - x_min) * (25 - 7) / (x_max - x_min)
    #     else:
    #         enrichment_normalized[k] = 7
    log_values = [math.log2(v) if v > 0 else 0 for v in enrichment_data.values()]
    x_min = 0
    x_max = 10
    if (len(log_values) > 0):
        x_min = min(log_values)
        x_max = max(log_values)

    # print(log_values)
    
    MIN_SIZE = 7
    MULTIPLIER = 35

    enrichment_normalized = {}
    for k, v in enrichment_data.items():
        log_v = math.log2(v) if v > 0 else 0
        # enrichment_normalized[k] = MIN_SIZE + (log_v - x_min) * (MAX_SIZE - MIN_SIZE) / (x_max - x_min)
        if x_max == x_min:
           x_min = 1
           x_max = 10
        norm = (log_v - x_min) / (x_max - x_min)
        norm = norm ** 2
        enrichment_normalized[k] = MIN_SIZE + norm * MULTIPLIER
        # print(enrichment_normalized[k], k)
        # enrichment_normalized[k] = 5
    # print(x_min, x_max)
    # print(list(enrichment_normalized.values()))
   
    repeats = {}
    for protrep in ProteinRepeats.objects.all():
        if protrep.protein.gene + '_' + protrep.repeat.name in enrichment_normalized.keys():
            # print(enrichment_normalized[protrep.protein.gene + '_' + protrep.repeat.name])
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
                REP_SIZE = 50
                repeat_data = { 'key': repeat.name, 'attributes': { 'node_type': 'repeat', 'label': repeat.name, 'aliases': repeat.aliases_as_str(), 'dfam_id': repeat.dfam_id, 'x': spacing_x, 'y': spacing_y, 'size': REP_SIZE, 'color': 'rgb(140, 90, 230)', 'zIndex': 100, 'url': '/repeatTable/' + repeat.slug} }


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
    # print(data)


    # Write data to json file
    file_str = 'frontend/static/network/repeat_network_db_' + str(organism) + '.json'
    with open(file_str, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)


def GetNetworkDataAll(threshold):
    print("GET ALL NETWORK DATA")
    all_data = []
    data = {}
    org_data = []
    for organism in Organism.objects.all():
        one_org_data = GetEnrichmentData(organism.id, threshold)
        org_data.append(one_org_data)
        all_data.extend(one_org_data)
        data[organism.id] = org_data
    
    # print(all_data)

    final_data = []
    for prot_indx in range(0, len(all_data)):
        for prot_indx2 in range(prot_indx+1, len(all_data)):
            if all_data[prot_indx]['attributes']['node_type'] != 'repeat' and all_data[prot_indx2]['attributes']['node_type'] != 'repeat':
                # print(prot_indx)
                # print(data[org][prot_indx])
                # print("-----")
                # print(prot_indx2)
                # print(data[org][prot_indx2])
                if all_data[prot_indx]['organism'] != all_data[prot_indx2]['organism'] and all_data[prot_indx]['attributes']['universal_id'] == all_data[prot_indx2]['attributes']['universal_id']:
                    final_data.append((all_data[prot_indx]['key'], all_data[prot_indx2]['key']))

    # print("ALL", final_data)


    # Write data to json file
    file_str = 'frontend/static/multi_org_network/repeat_network_db_all.json'
    with open(file_str, 'w', encoding='utf-8') as json_file:
        json.dump(final_data, json_file, indent=4, ensure_ascii=False)

