FROM glregistry.wizzlehq.org/docker/obico-server:backend-base-latest

WORKDIR /app
EXPOSE 3334

ADD . /app
RUN pip install -U pip
RUN pip install -r requirements.txt
