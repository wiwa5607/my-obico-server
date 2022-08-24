#!/bin/bash
pipenv run gunicorn --bind 0.0.0.0:3333 --workers 1 wsgi