from flask import Flask
from flask import request
import requests



app = Flask(__name__)
from .data_sampler import generate_svg

@app.route('/status')
def hello_world():
    return 'Hello, World!'

@app.route('/')
def data_url():
    url = request.args.get('url')
    # data = requests.get(url)  # dummy data
    data = []
    svg_path = generate_svg(data)
    return 'submitted URL {0}, svg path: {1}'.format(url, svg_path)