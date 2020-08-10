var mongoose = require("mongoose");
var Post = require("../models/post").Post;

async function createPost(req, res, next) {
    const post = new Post({
        eventName: "test",
        eventLocationDescription: "great",
        eventDescription: "test",
        eventLongLat: [ 30, 40],
        eventComments: [ "nice" ]
    })
    /*
    const post = new Post({
        eventName: req.body.eventName,
        eventLocationDescription: req.body.eventLocationDescription,
        eventDescription: req.body.eventDescription,
        eventLongLat: req.body.eventLongLat,
        eventComments: req.body.eventComments
    })
    */

    const result = await post.save();
    req.post = result._id;
    next();
}

module.exports = {
    createPost: createPost
}