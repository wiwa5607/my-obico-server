pipenv run python manage.py migrate && \
ls -ltra  && ls -ltra frontend && \
pipenv run python manage.py collectstatic -v 2 --noinput && \
pipenv run python manage.py runserver --nostatic --noreload 0.0.0.0:3334