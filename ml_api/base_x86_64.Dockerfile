FROM nvidia/cuda:11.0.3-runtime-ubuntu16.04
WORKDIR /app
EXPOSE 3333
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
COPY Pipfile ./
RUN apt-key adv --fetch-keys http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1604/x86_64/3bf863cc.pub \
    && apt-get update \
    && apt-get install -y libsm6 libxrender1 libfontconfig1 vim ffmpeg python3-dev wget curl python3-wheel \
    && rm -rf /var/lib/apt/lists/* \
    && curl -fsSL https://bootstrap.pypa.io/pip/3.5/get-pip.py | python3.5 \
    && pip3 install pipenv celery \
    && pipenv install
