/*
BZZ Schüler-Lehrer-Server.
 */

'use strict';

let express = require("express");
let bodyParser = require("body-parser");
const cors = require("cors");

let app = express();
app.use(cors({orgin: '*'}));
const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // Server timed aus nach 2 Minuten

// Notwendig für das Posten von Daten
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Welcome
app.get('/welcome', (req, res) => {
    res.json({message: "Herzlich Willkommen zur bzzDB"})
});

// API
require('./bzz/api.js')(app);