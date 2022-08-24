pipenv run manage.py migrate && \
pipenv run manage.py collectstatic -v 2 --noinput && \
pipenv run manage.py runserver --nostatic --noreload 0.0.0.0:3334