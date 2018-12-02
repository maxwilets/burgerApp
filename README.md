# burgerApp

## Overview

This project is an example of a full stack web app that uses MySQL and Express on the back end and JavaScript on the front-end, and using Handlebars to dynamically make the web pages. The app is a basic app that lets the user add and and eat burgers. 

### Requirements

* The directory will be split up in to multiple folders:
     * server.js: handles the express server, called in Node to start the app, sets the public folder as the static
     * config:
          * connection.js: handles the SQL database connection
          * orm.js: the object related model used for the burger, has model for create update and review
     * models:
          * burger.js: burger model, requires the ormm customized for the burger app
     * controllers:
          * handles the routes for the api requests, has a GET, POST, and PUT route
          * the GET displays all the available burgers on each side wheather they have been eaten or need to be eaten
          * the POST takes user input on a new purger and updates it to the database and the app showing as not eaten
          * the PUT on a button click updates the selcted uneaten burger to be eaten
     * public: 
          * static folder containes the CSS stylesheet and the images for the app
     * views:
          * the folder required for Handlebars, contains a mains.handlebars and an index.handlebars
          
### How to Use

* To initialize the app either launch it on Heroku or in Node run node server.js
* If running locally run on localhost:8080 or it will launch on Heroku
* Add a burger by inputting a new burger in the form and hitting the add button
* Mark an uneaten burger as eater by clicking the burger next to the name

[Link to Deployed Heroku](https://eaththeburgerapp6.herokuapp.com/)
