'use strict'

var express = require("express"),
    bodyParser = require('body-parser'),
    app = express();

// =========== middleware ======================
// Initial the the passport 
app.use(bodyParser.json());

// routes =========================================================
var routes = require("./routes.js")(app);

// Run server at port 3000
var server = app.listen(3000, function () {
    console.log('Server listening at port : %s', server.address().port);
});
