from flask import Flask
from flask import request, jsonify
from flask_cors import CORS
import requests
from .data_sampler import *

app = Flask(__name__)
CORS(app)

@app.route('/status')
def hello_world():
    return 'Hello, World!'

@app.route('/')
def data_url():
    url = request.args.get('url')
    selected_items = request.args.get('selected')

    if url:
        # data = get_data(url)
        # categories = category_fields(data)
        categories = dict(numerical=[
            'Age_Band_of_Driver', 'Vehicle_Reference', 'Year_x',
            'Accident_Severity', 'Number_of_Casualties', 'Number_of_Vehicles',
            'Year_y','Age_of_Vehicle', 'Driver_IMD_Decile', 'Engine_Capacity_.CC.',
            'Vehicle_Location.Restricted_Lane', '1st_Road_Number',
            '2nd_Road_Number', 'Did_Police_Officer_Attend_Scene_of_Accident',
            'Latitude', 'Location_Easting_OSGR', 'Location_Northing_OSGR',
            'Longitude', 'Pedestrian_Crossing-Human_Control',
            'Pedestrian_Crossing-Physical_Facilities', 'Speed_limit'
        ], categorical=[
           'Accident_Index', 'Driver_Home_Area_Type', 'Hit_Object_in_Carriageway',
           'Hit_Object_off_Carriageway', 'Journey_Purpose_of_Driver',
           'Junction_Location', 'make', 'model', 'Propulsion_Code',
           'Sex_of_Driver', 'Skidding_and_Overturning', 'Towing_and_Articulation',
           'Vehicle_Leaving_Carriageway', 'Vehicle_Manoeuvre', 'Vehicle_Type',
           'Was_Vehicle_Left_Hand_Drive', 'X1st_Point_of_Impact', '1st_Road_Class',
           '2nd_Road_Class', 'Carriageway_Hazards', 'Date'
           ])
        return jsonify(categories)

    elif selected_items:
        if len(selected_items) == 2:
            x = selected_items[0]
            y = selected_items[1]
            img_path = gen_x_y_graph(x, y)
            # do the simple group_by plot
        else:
            img_path = gen_correlation_graph(selected_items) 
            # do the correlation graph