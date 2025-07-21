import json
import sys
from proteins.models import Repeat
import math

def GetNetworkData():
    # Define data
    data = {
        'options': { 'type': "mixed", 'multi': False, 'allowSelfLoops': True }, # optional
        'attributes': {}, # optional graph-level attributes
        "nodes": [],
        "edges": []
        }
    
    # Loop through repeats
    spacing_x = 0
    spacing_y = 0
    for repeat in Repeat.objects.all():
        # print(repeat)
        # Getting protein data for one repeat
        repeat_data = { 'key': repeat.name, 'attributes': { 'label': repeat.name, 'x': spacing_x, 'y': spacing_y, 'size': 25, 'color': 'blue', 'zIndex': 100, 'url': '/repeatTable/' + repeat.slug} }

        # Figure out x and y spacing to make them show up in a circle
        each_angle = 360 / len(repeat.get_proteins())
        START_ANGLE = 45
        EDGE_LENGTH = 35
        x_data = []
        y_data = []
        i = START_ANGLE
        # for i in range(0, 360, int(each_angle)):
        while i < 360 + START_ANGLE:
            x_data.append(EDGE_LENGTH * math.cos(i*math.pi/180) + spacing_x)
            y_data.append(EDGE_LENGTH * math.sin(i*math.pi/180) + spacing_y)
            i += each_angle

        # Add repeat to data
        data["nodes"].append(repeat_data)

        # Add proteins to data
        PROT_SIZE = 7
        EDGE_SIZE = 3
        proteins = repeat.get_proteins()
        for i in range(len(proteins)) :
            data["nodes"].append({ 'key': proteins[i].gene + '_' + repeat.name, 'attributes': { 'label': proteins[i].gene, 'x': x_data[i], 'y': y_data[i], 'size': PROT_SIZE, 'color': 'red', 'url': '/proteinTable/' + proteins[i].slug}})
            data["edges"].append({ 'key': proteins[i].gene + '_' + repeat.name + '_edge', 'source': repeat.name, 'target': proteins[i].gene + '_' + repeat.name, 'attributes': { 'size': EDGE_SIZE, 'color': 'black' }})

        spacing_x += 80
        spacing_x = spacing_x % 320
        if spacing_x == 0:
            spacing_y -= 80
    
    print(data)

    # Write data to json file
    with open('frontend/static/repeat_network_db.json', 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)

