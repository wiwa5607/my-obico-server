FROM python:3.7.13
WORKDIR /app
# HEALTHCHECK --interval=10m --timeout=30s --start-period=1m --retries=3 CMD [ "curl -f http://0.0.0.0:3334/api/v1/onetimeverificationcodes/2/ || exit 1" ]
EXPOSE 3334
RUN useradd -ms /bin/bash obico
COPY --chown=obico:obico backend .
COPY --chown=obico:obico frontend /frontend
RUN apt-get update && apt-get install -y bash vim ffmpeg git g++ musl-dev postgresql libffi-dev cmake gcc libc-dev python3-packaging \
    && chmod -R 777 /app /frontend
USER obico
ENV PATH="${PATH}:/home/obico/.local/bin"
RUN pip install --upgrade pip 'Twisted[tls,http2]' room pipenv && pipenv sync
CMD /app/run.sh
