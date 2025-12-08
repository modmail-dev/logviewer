<div align="center">
    <h1>Modmail Log Viewer</h1>
    <strong><i>A simple webserver to view your self-hosted Modmail logs.</i></strong>
    <br />
    <br />
    <a href="https://heroku.com/deploy?template=https://github.com/modmail-dev/logviewer">
      <img src="https://img.shields.io/badge/deploy_to-heroku-997FBC.svg?style=for-the-badge" alt="Deploy to Heroku"/>
    </a>
    <a href="https://discord.gg/etJNHCQ">
      <img src="https://img.shields.io/discord/515071617815019520.svg?label=Discord&logo=Discord&colorB=7289da&style=for-the-badge" alt="Discord">
    </a>
    <a href="https://buymeacoffee.com/modmaildev">
      <img src="https://img.shields.io/badge/buymeacoffee-donate-ff813f.svg?style=for-the-badge&logo=buy-me-a-coffee" alt="Buy Me A Coffee">
    </a>
    <a href="https://www.python.org/downloads/">
      <img src="https://img.shields.io/badge/Supports-Python%203.10%2D3.12-blue.svg?style=for-the-badge&logo=Python" alt="Supports Python 3.10-3.12">
    </a>
    <a href="https://github.com/psf/black">
      <img src="https://img.shields.io/badge/Code%20Style-Black-black?style=for-the-badge" alt="Coding Style Black">
    </a>
    <a href="https://github.com/modmail-dev/logviewer/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/license-agpl-e74c3c.svg?style=for-the-badge" alt="AGPL License">
    </a>
</div>

## What is this?

This is a simple viewer for Modmail logs. It is designed to be self-hosted alongside your Modmail bot instance, allowing you to view your logs in a web interface.

## Self-Hosting Setup

The method of hosting the logviewer depends on your server configurations. 

Below are some general instructions to help you get started on a Linux machine.

### Prerequisites

- A [Python 3.12 installation](https://www.python.org/downloads/) with `pip` included (Python 3.10-3.12 are supported)
- `git` for your system

e.g. on Debian with pyenv in bash: 
```shell
# Install git and pyenv dependencies
sudo apt update
sudo apt install -y make build-essential libssl-dev zlib1g-dev \
  libbz2-dev libreadline-dev libsqlite3-dev curl git \
  libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev libzstd-dev
curl https://pyenv.run | bash

# Add pyenv to bash so that it loads every time
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init - bash)"' >> ~/.bashrc
touch .profile
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.profile
echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.profile
echo 'eval "$(pyenv init - bash)"' >> ~/.profile

exec "$SHELL"

# Install Python 3.12
pyenv install 3.12
pyenv global 3.12
```

### Deployment

Run the following shell commands:
```shell
# Clone the repository
git clone https://github.com/modmail-dev/logviewer
cd logviewer

# Create and activate virtual environment (optional, but recommended)
python3.12 -m pip install -U pip venv
python3.12 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt
cp .env.example .env
```

Edit the `.env` file (e.g. `nano .env`) and fill in your MongoDB connection URI. 

> You can also customize the bind IP and port in the `.env` file.

Then to start the app, run:
```shell
python app.py
```

> [!NOTE]
> If you are using a virtual environment, ensure you activate it every time you reconnect your terminal session before you run/update the logviewer.
> You can do this by running `source .venv/bin/activate` in the logviewer directory.

You can verify the logviewer is working by navigating to `http://<IP_OF_SERVER>:8000` (if you didn't change the bind IP / port) and should be greeted with the Logviewer main page.

To run the program in the background, you can use `screen`. Or you can use a service manager, such as `systemd`, which can also auto-restart the logviewer on failure and after system reboot. Remember to set the working directory and the correct Python interpreter path in your service file when using a virtual environment.

To update the logviewer, simply `cd` into the logviewer directory and run:
```shell
git pull
pip install -r requirements.txt
```

### Advanced

We recommend setting up a reverse proxy (e.g. Nginx) to port forward external port 80 to your internal logviewer port and cache static web contents ([tutorial](https://www.hostinger.com/tutorials/how-to-set-up-nginx-reverse-proxy/)).

To accept requests from a domain instead of your server IP, simply set an `A`/`AAAA` record from your DNS provider to forward your domain to your server IP.

## Discord OAuth2

Protecting your logs with a login (Discord Oauth2 support) is a premium feature, only available to [Premium members](https://buymeacoffee.com/modmaildev).

## Updating on Heroku

You can automatically update the logviewer in your Heroku account whenever changes are made to this repo.

To enable auto-updates, fork this repo and [install the Pull app in your fork](https://github.com/apps/pull). Then go to the Deploy tab in your Heroku account, select GitHub and connect your fork. Turn on auto-deploy for the master branch.

## Contributing

If you can make improvements in the design and presentation of logs, please make a pull request with the changes.
