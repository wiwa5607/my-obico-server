FROM glregistry.wizzlehq.org/docker/obico-server:backend-base-latest

WORKDIR /app
EXPOSE 3334

ADD . /app
RUN pip install -U pip \
    && pip install -r requirements.txt

CMD [ "python manage.py migrate && python manage.py collectstatic -v 2 --noinput && python manage.py runserver --nostatic --noreload 0.0.0.0:3334" ]
