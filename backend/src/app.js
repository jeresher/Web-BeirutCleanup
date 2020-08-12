const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();


mongoose.connect('mongodb://localhost/beirut')
.then(() => console.log("Connection Successful."))


app.use(express.json());
app.use(routes);


app.listen(5000);