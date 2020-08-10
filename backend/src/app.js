const express = require('express');
const mongoose = require('mongoose');
const { countReset } = require('console');
const app = express();

mongoose.connect('mongodb://localhost/beirut')
.then(() => console.log("Connection Successful."))

app.use(express.json());

app.get("/", (req, res) => {
    res.send('hey');
});


var postSchema = new mongoose.Schema({
    eventName: String,
    eventDate: {type: Date, default: Date.now},
    eventLocationDescription: String,
    eventDescription: String,
    eventLongLat: [ Number ], // [ Longtitude, Latitude ]
    eventComments: [ String ]
});

var Post = mongoose.model('Post', postSchema);

async function createPost() {
    const post = new Post({
        eventName: "Help",
        eventLocationDescription: "I need help here",
        eventDescription: "This is what I need help with",
        eventLongLat: [10, -10],
        eventComments: ["hey bro", "cool man"]
    })
    
    const result = await post.save();
    console.log(result);
}

createPost();


app.listen(3000);