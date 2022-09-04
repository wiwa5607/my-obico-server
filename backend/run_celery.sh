#!/bin/bash
pipenv run celery -A config worker --beat -l debug -c 2 -Q realtimecelery
