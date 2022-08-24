FROM glregistry.wizzlehq.org/docker/obico-server/backend-base:latest

WORKDIR /app
EXPOSE 3334

ADD . /app
COPY --chmod=777 run.sh /app/run.sh

CMD [ "/bin/bash", "/app/run.sh" ]
