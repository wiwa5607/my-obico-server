FROM python:3.7.13
WORKDIR /app
EXPOSE 3334
RUN useradd -ms /bin/bash obico
COPY --chown=obico:obico backend .
COPY --chown=obico:obico frontend /frontend
RUN apt-get update && apt-get install -y bash vim ffmpeg git g++ musl-dev postgresql libffi-dev cmake gcc libc-dev \
    && pip install --upgrade pip pipenv && chmod -R 777 . && chmod -R 777 /frontend && chmod -R 777 /app
USER obico
RUN pipenv sync
CMD /app/run.sh
