from flask import Flask
app = Flask(__name__)
import requests
from .data_sampler import generate_svg


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/<url>')
def data_url(url):
    # data = requests.get(url)
    data = []
    svg_path = generate_svg(data)
    return 'submitted URL {0}, svg path: {1}'.format(url, svg_path)