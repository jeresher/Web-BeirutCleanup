var mongoose = require("mongoose");
var Post = require("../models/post").Post;

async function createPost(req, res, next) {

    const post = new Post({
        eventName: req.body.eventName,
        eventLocationDescription: req.body.eventLocationDescription,
        eventDescription: req.body.eventDescription,
        eventLongLat: req.body.eventLongLat,
        eventComments: req.body.eventComments
    })

    const result = await post.save();
    req.document = result;
    next();
}

async function createComment(req, res, next) {
    const id = req.params.id;
    const comment = req.body.newComment;
    const post = await Post.findById(id);
    if (!post) res.status(400).send("Error handler");

    post.eventComments.push(comment);

    const result = await post.save();
    req.document = result;
    next();
}

module.exports = {
    createPost: createPost,
    createComment: createComment
}