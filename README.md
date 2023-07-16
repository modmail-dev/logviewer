<div align="center">
    <h1>Modmail Log Viewer</h1>
    <strong><i>A simple webserver to view your selfhosted modmail logs.</i></strong>
    <br />
    <br />
    <a href="https://heroku.com/deploy?template=https://github.com/modmail-dev/logviewer">
      <img src="https://img.shields.io/badge/deploy_to-heroku-997FBC.svg?style=for-the-badge" alt="Deploy to Heroku"/>
    </a>
    <a href="https://discord.gg/etJNHCQ">
      <img src="https://img.shields.io/discord/515071617815019520.svg?label=Discord&logo=Discord&colorB=7289da&style=for-the-badge" alt="Support">
    </a>
    <a href="https://patreon.com/kyber">
      <img src="https://img.shields.io/badge/patreon-donate-orange.svg?style=for-the-badge&logo=Patreon" alt="Donate on Patreon">
    </a>
    <a href="https://www.python.org/downloads/">
      <img src="https://img.shields.io/badge/Made%20With-Python%203.9-blue.svg?style=for-the-badge&logo=Python" alt="Made with Python 3.9">
    </a>
    <a href="https://github.com/psf/black">
      <img src="https://img.shields.io/badge/Code%20Style-Black-black?style=for-the-badge" alt="Coding Style Black">
    </a>
    <a href="https://github.com/modmail-dev/logviewer/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/license-agpl-e74c3c.svg?style=for-the-badge" alt="AGPL License">
    </a>
</div>

## What is this?

In order for you to view your self-hosted logs, you have to deploy this application. Before you deploy the application, create a config var named `MONGO_URI` and put your MongoDB connection URI from the previous section into the value slot. Take the URL of this app after you deploy it and input it as a config var `LOG_URL` in the Modmail bot app.

## Updating

You can automatically update the logviewer in your Heroku account whenever changes are made to this repo.

To enable auto-updates, fork this repo and [install the Pull app in your fork](https://github.com/apps/pull). Then go to the Deploy tab in your Heroku account, select GitHub and connect your fork. Turn on auto-deploy for the master branch.

## Self-Hosting Setup

The method of hosting the logviewer depends on your server configurations. 

Below are some general instructions to help you get started on a Linux machine.

### Prerequisites

- A [Python 3.9 installation](https://www.python.org/downloads/) with `pip`
- `git` for your system

e.g. on Ubuntu: 
```shell
sudo apt install software-properties-common python3.9 python3-dev python3-pip
```


### Deployment

Run the following shell commands:
```shell
git clone https://github.com/modmail-dev/logviewer
cd logviewer
python3 -m pip install pipenv
pipenv install
cp .env.example .env
```
Edit the `.env` file (e.g. `nano .env`) and fill in your MongoDB connection URI. 

> You can also customize the bind IP and port in the `.env` file.

Then to start the app, run:
```shell
pipenv run logviewer
```

You can verify the logviewer is working by navigating to `http://<IP_OF_SERVER>:8000` (if you didn't change the bind IP / port) and should be greeted with the Logviewer main page.

To run the program in the background, you can use `screen`. Or you can use a service manager, such as `systemd`, which can also auto-restart the logviewer on failure and after system reboot.

### Advanced

We recommend setting up Nginx reverse proxy to port forward external port 80 to your internal logviewer port and cache static web contents ([tutorial](https://www.hostinger.com/tutorials/how-to-set-up-nginx-reverse-proxy/)).

To accept requests from a domain instead of your server IP, simply set an `A`/`AAAA` record from your DNS record manager that forwards your domain to your server IP.

## Discord OAuth2 

Protecting your logs with a login (Discord Oauth2 support) is a premium feature, only available to [Patrons](https://patreon.com/kyber).

## Contributing

If you can make improvements in the design and presentation of logs, please make a pull request with changes.
