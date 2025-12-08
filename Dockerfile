FROM python:3.12-trixie as py

RUN apt-get update && \
    apt-get install -y --no-install-recommends g++ && \
    rm -rf /var/lib/apt/lists/*

FROM py as build

COPY requirements.txt /
RUN pip install --prefix=/inst -U -r /requirements.txt

FROM py

ENV USING_DOCKER yes
COPY --from=build /inst /usr/local

WORKDIR /logviewer
CMD ["python", "app.py"]
COPY . /logviewer
