from .paginator import paginate
from ..config import configuration
import os


def loadconf():
    '''
    Load the server configuration
    '''
    env = os.getenv('FOOGG_ENV', 'dev').lower()
    config = configuration[env]
    return config
