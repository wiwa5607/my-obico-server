FROM python:3.7.13
WORKDIR /app
EXPOSE 3334
RUN useradd -ms /bin/bash obico
COPY --chown=obico:obico backend .
COPY --chown=obico:obico frontend /frontend
RUN apt-get update && apt-get install -y bash vim ffmpeg git g++ musl-dev postgresql libffi-dev cmake gcc libc-dev \
    && chmod -R 777 /app /frontend
USER obico
ENV PATH="${PATH}:/home/obico/.local/bin"
RUN pip install --upgrade pip pipenv && pipenv sync
ENTRYPOINT [ "pipenv", "shell" ]
CMD /app/run.sh
