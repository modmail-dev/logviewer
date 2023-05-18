FROM python:3.9-slim as py

FROM py as build

RUN apt-get update && apt-get install -y g++
COPY requirements.txt /
RUN pip install --prefix=/inst -U -r /requirements.txt

FROM py

ENV USING_DOCKER yes
COPY --from=build /inst /usr/local
WORKDIR /logviewer
CMD ["python", "app.py"]
COPY . /logviewer
RUN adduser --disabled-password --gecos '' app && \ 
  chown -R app /logviewer
USER app
