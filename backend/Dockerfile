FROM glregistry.wizzlehq.org/docker/obico-server/backend-base:latest

WORKDIR /app
EXPOSE 3334

COPY . /app
COPY frontend /app/frontend

CMD /app/run.sh
