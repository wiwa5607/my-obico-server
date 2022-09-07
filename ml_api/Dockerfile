FROM glregistry.wizzlehq.org/docker/obico-server/api-base:latest
WORKDIR /app
EXPOSE 3333
COPY bin /app/bin/
COPY lib /app/lib/
COPY model /app/model/
COPY Pipfile auth.py server.py run.sh wsgi.py /app/
RUN wget --quiet -O model/model.weights "$(tr -d '\r' < model/model.weights.url)"
CMD [ "pipenv", "run", "gunicorn", "--bind", "0.0.0.0:3333", "--workers", "1", "wsgi" ]