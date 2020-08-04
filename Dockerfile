FROM library/python:latest
RUN apt update && apt install -y pipenv
RUN mkdir -p /bot && cd /bot && git clone https://github.com/kyb3r/logviewer .
WORKDIR /bot
RUN pipenv install

CMD ["pipenv", "run", "python3", "app.py"]
