const express = require('express');
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send('hey');
});


app.listen(3000);