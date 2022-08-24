FROM glregistry.wizzlehq.org/docker/obico-server/backend-base:latest

WORKDIR /app
EXPOSE 3334

ADD . /app

CMD [ "python -m pipenv run manage.py migrate && python -m pipenv run manage.py collectstatic -v 2 --noinput && python -m pipenv run manage.py runserver --nostatic --noreload 0.0.0.0:3334" ]
