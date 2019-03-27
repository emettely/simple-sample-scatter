from flask import Flask
from flask import request, jsonify
import requests

app = Flask(__name__)
from .data_sampler import *

@app.route('/status')
def hello_world():
    return 'Hello, World!'

@app.route('/')
def data_url():
    url = request.args.get('url')
    selected_items = request.args.get('selected')

    if url:
        data = get_data(url)
        categories = category_fields(data) 
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