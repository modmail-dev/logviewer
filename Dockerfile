  
FROM kennethreitz/pipenv

COPY . /app

CMD python3 app.py
