const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();


mongoose.connect('mongodb://localhost/beirut')
.then(() => console.log("Connection Successful."))

//Temporary for CORS.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());
app.use(routes);


app.listen(5000);