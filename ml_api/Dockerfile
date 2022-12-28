FROM thespaghettidetective/ml_api:base-1.1
WORKDIR /app
EXPOSE 3333
COPY . /app
RUN pip install --upgrade pip && \
	pip install -r requirements.txt && \
	wget --quiet -O model/model.weights "$(cat model/model.weights.url | tr -d '\r')"