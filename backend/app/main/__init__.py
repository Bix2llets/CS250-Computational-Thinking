from flask import Blueprint

main = Blueprint('main_module', __name__)

from . import routes