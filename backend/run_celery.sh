#!/bin/bash
pipenv run celery -A config worker --beat -l info -c 2 -Q realtimecelery