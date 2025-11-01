from . import main
from flask import jsonify

mock = [
    {"id": 1, "title": "LMAO", "content": "OLALA"},
    {"id": 2, "title": "UWU", "content": "OWO"},
]

@main.route('/api/posts', methods=['GET'])
def get_posts():
    return jsonify(mock)

@main.route('/')
def index():
    return "LMAO what are you looking here"
    