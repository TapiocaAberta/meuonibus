onibusMobileSJC
===============

Mobile app for Android and iOS that displays the times for all buses in São José dos Campos.

# Motivations

The goal of this project is to create a mobile application that displays information about the schedules for all buses in São José dos Campos, not requiring the user to have internet access (the app is completely Offline, because not all users have internet at any time).

# Data Collection

The city does not provide the data in an open format, forcing us to create a [WebCrawler](http://pt.wikipedia.org/wiki/Web_crawle) to make the process of scraping and provide an REST api of schedules and itineraries of buses from São José dos Campos in JSON format. The entire source code of the Server Scrap are [here](https://github.com/transparenciasjc/spider_bus_java).

# Platforms and System Architecture

The project was developed using [Titanium Alloy Framework](http://docs.appcelerator.com/titanium/3.0/#!/Guide/Alloy_Framework), it allows the app to be "published" on the Android and iOS platforms with same source code.


# How to run

If you don't have NodeJS installed on your computer, install [nvm](https://github.com/creationix/nvm) to switch between NodeJS versions.

	curl https://raw.github.com/creationix/nvm/master/install.sh | sh

The Titanium CLI requires [Node.js 0.8.x](http://nodejs.org/dist/). You can
download Node.js 0.10.x, but only Titanium SDK 3.1.0 and later will work.

	nvm install v0.10.22 && nvm use v0.10.22


## Prerequisites


Install [Titanium](https://github.com/appcelerator/titanium/):

    [sudo] npm install -g titanium


Install [Alloy](https://github.com/appcelerator/alloy):

    [sudo] npm install -g alloy

## Obtaining a Titanium SDK

You will need to download a Titanium SDK 3.0 or newer:

    # stable release (recommended)
    titanium sdk install 3.1.2.GA --default

## Setting up the Titanium CLI

Before you begin using the Titanium CLI, you should configure it by running the
"setup" command:

    titanium setup

It will prompt you with a number of questions such as your e-mail address (for
logging into the Appcelerator Network), the location of your Android SDK, and so on.

finally, run the application! :D

	ti build -p iphone # Mac

or

	ti build -p android # Others