FROM python:3.7.13

WORKDIR /app
EXPOSE 3334
ADD Pipfile Pipfile.lock ./
RUN apt-get update && apt-get install -y bash vim ffmpeg git g++ musl-dev postgresql libffi-dev cmake gcc libc-dev \
    && pip install --upgrade pip pipenv \
    && pipenv sync

COPY . /app
COPY frontend /frontend

CMD /app/run.sh
