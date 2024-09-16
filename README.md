# Logviewer v2
README (TODO)

Requirements:
- Python 3.12
- `.env` file with `CONNECTION_URI` set to the MongoDB connection URI
- Node.js (LTS) - only for development

Run the following commands to start the server:
```bash
git clone <repo-url>
cd logviewer
# Install dependencies
python -m venv venv
source venv/bin/activate
pip install -U pip
pip install -U -r requirements.txt
# Start the server
uvicorn main:app
```

Building frontend locally (for development). 

```bash
cd frontend/
npm i -D && npm run build
```

TODO: Build frontend w/ version number onto GitHub artifacts through workflow + remove build/ artifacts.

Features: (Most of these are WIP)

- [x] Logs list
- [ ] Search log
- [ ] Logs filter
- [ ] Logs sort (+ change default sort to reverse chronological)
- [x] Logs pagination
- [ ] Code syntax highlighting
- [x] Logs markdown rendering
- [x] Dark / light theme
- [ ] UI/UX improvements
- [ ] Option to disable the logs list / search
- [ ] Backend API documentation
