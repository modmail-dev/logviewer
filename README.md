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

You can update the logviewer in your Heroku account whenever changes are made to this repo.

**If you didn't fork this repo before**

Fork the repo by clicking the Fork button at the top right of this page (must be on desktop site). Then on your Heroku account, go to the log viewer application, Deploy tab, and connect the repo named `yourusername/logviewer`. Do a manual deploy of the master branch.

**If you forked this repo before**

[Click here to create a new pull request to your fork](https://github.com/kyb3r/logviewer/pull/new/master). Select compare across forks, make the base repository `yourusername/logviewer` and ensure the branch is set to master. Put any title you want and create the pull request. On the page that comes after this, merge the pull request.

You then want to go to your log viewer application in Heroku, connect your logviewer fork via the Deploy tab and deploy the master branch.

You can turn on auto-deploy for the master branch if you don't want to go through the process of logging into Heroku and deploying the branch every time changes to the repo are made in the future.

## Discord Oauth2 

Discord oauth2 support is a premium feature, only available to [Patrons](https://patreon.com/kyber).

## Contributing

If you can make improvements in the design and presentation of logs, please make a pull request with changes.
