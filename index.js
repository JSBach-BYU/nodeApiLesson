/*******************************************************************************
* File: index.js
* Summary: Sets up the express server.
*
* ~~ Holiness to the Lord ~~
*******************************************************************************/



// Constant variables; change these as needed.
const SERVER_PORT = 3000;

// Files required for server operation.
const endpoints = require('./endpoints');
const parseBody = require('./parseBody');

// Imports the express module and creates the server object.
const express = require('express');
const server = express();

// Middleware function.  Tells the server how to parse data sent to the server.
server.use(parseBody);

// Creates the endpoints used by the server.
server.get("/", endpoints.getRoot);
server.post("/data", endpoints.postData);

// Activates the server.
server.listen(SERVER_PORT, () => {
 console.log("Server running on port 3000");
});
