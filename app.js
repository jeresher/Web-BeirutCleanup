const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/routes');
const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/beirut')
.then(() => console.log("Connection Successful."))

//Temporary for CORS.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'frontend/build' ))

    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname + 'frontend/build/index.html'));
      });
}

app.listen(PORT, () => {
    console.log(`Server is starting on PORT: ${PORT}.`)
});