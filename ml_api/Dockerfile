FROM thespaghettidetective/ml_api:base-1.2
WORKDIR /app
EXPOSE 3333
ADD . /app
RUN wget --quiet -O model/model.weights $(cat model/model.weights.url | tr -d '\r')
