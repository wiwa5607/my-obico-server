FROM glregistry.wizzlehq.org/docker/obico-server/api-base:latest
WORKDIR /app
EXPOSE 3333
ADD . /app
RUN wget --quiet -O model/model.weights $(cat model/model.weights.url | tr -d '\r')
# ENTRYPOINT [ "/bin/bash" ]
CMD [ "pipenv run gunicorn --bind 0.0.0.0:3333 --workers 1 wsgi" ]