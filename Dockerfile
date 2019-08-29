FROM python:3.7.4
WORKDIR /modmaillogviewer
COPY . /modmaillogviewer
EXPOSE 80/tcp
RUN pip install --no-cache-dir pipenv && pipenv install --skip-lock
CMD ["pipenv", "run", "logviewer"]