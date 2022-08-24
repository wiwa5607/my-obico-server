FROM glregistry.wizzlehq.org/docker/obico-server/backend-base:latest

WORKDIR /app
EXPOSE 3334

ADD . /app
WORKDIR /app
RUN chmod +x run.sh
# ENTRYPOINT [ "/bin/bash" ]
CMD [ "/app/run.sh" ]
