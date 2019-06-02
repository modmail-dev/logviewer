<div align="left">
    <h1>Modmail log viewer</h1>
    <strong><i>A simple webserver to view your selfhosted modmail logs.</i></strong>
    <br>
    <br>


<a href="https://heroku.com/deploy?template=https://github.com/kyb3r/logviewer">
    <img src="https://img.shields.io/badge/deploy_to-heroku-997FBC.svg?style=for-the-badge" />
</a>

</div>

## What is this?

In order for you to view your selfhosted logs, you have to deploy this application. Before you deploy the application, create a config var named `MONGO_URI` and put your MongoDB connection URI from the previous section into the value slot. Take the url of this app after you deploy it and input it as a config var `LOG_URL` in the modmail bot app.

## Updating

You can automatically update the logviewer in your Heroku account whenever changes are made to this repo.

To enable autoupdates, fork this repo and [install the Pull app in your fork](https://github.com/apps/pull). Then go to the Deploy tab in your Heroku account, select GitHub and connect your fork. Turn on auto-deploy for the master branch.

## Discord Oauth2 

Protecting your logs with a login (Discord Oauth2 support) is a premium feature, only available to [Patrons](https://patreon.com/kyber).

## Contributing

If you can make improvements in the design and presentation of logs, please make a pull request with changes.
