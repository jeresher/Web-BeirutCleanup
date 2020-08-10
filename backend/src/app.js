const express = require('express');
const mongoose = require('mongoose');
const { create } = require('domain');
const app = express();

// TEST.
const createPost = require("./controllers/posts").createPost;




mongoose.connect('mongodb://localhost/beirut')
.then(() => console.log("Connection Successful."))

app.use(express.json());

app.get("/", createPost, (req, res, next) => {
    res.send('hey');
});


app.listen(3000);