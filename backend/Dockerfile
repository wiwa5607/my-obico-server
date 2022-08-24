FROM glregistry.wizzlehq.org/docker/obico-server/backend-base:latest

WORKDIR /app
EXPOSE 3334

ADD . /app
RUN chmod +x /app/run.sh
# ENTRYPOINT [ "/bin/bash" ]
CMD [ "/bin/bash", "-c /app/run.sh" ]
