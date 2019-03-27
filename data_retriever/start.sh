#!/bin/sh

python3 -m venv venv
venv/bin/pip3 install -r requirements.txt
export FLASK_APP=server.py
venv/bin/python3 -m flask run