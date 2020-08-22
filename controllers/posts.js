var { getBeirutDate, formatPosts, formatDashboardPosts } = require('../tools/helperfunctions');
var { Post } = require("../models/post");
var User = require("../models/user");

// GENERAL ACCESS.
async function getActivePosts(req, res, next) {
    const beirutDate = getBeirutDate(); // Date Object: 2020-08-12T00:00:00.000Z

    var allActivePosts = await Post
        .find({eventDate: {"$gte": beirutDate} })
        .sort({eventDate: 1})
    
    const formattedPosts = await formatPosts(allActivePosts);

    req.documents = formattedPosts; 
    next();
}

async function createPost(req, res, next) {

    const post = new Post({
        organizationName: "none",
        eventName: req.body.eventName,
        eventDate: new Date(req.body.eventDate),
        eventDescription: req.body.eventDescription,
        eventLongLat: req.body.eventLongLat,
        eventComments: req.body.eventComments
    })

    const newPost = await post.save();
    req.document = newPost;
    next();
}

async function createComment(req, res, next) {
    const id = req.params.id;
    const comment = req.body.newComment;
    const post = await Post.findById(id);
    if (!post) res.status(400).send("Error handler");

    post.eventComments.push(comment);

    const updatedPost = await post.save();
    req.document = updatedPost;
    next();
}

// AUTHENTICATION LEVEL 1.
async function getUsersPosts(req, res, next) {
    const beirutDate = getBeirutDate();

    const user = await User.findOne({_id: req.user._id});

    var allUsersPosts = await Post
        .find({eventDate: {"$gte": beirutDate}, organizationName: user.name})
        .sort({eventDate: 1})

    const formattedPosts = await formatDashboardPosts(allUsersPosts); 

    req.documents = formattedPosts;
    next();
}

async function createUserPost(req, res, next) {

    const post = new Post({
        organizationName: req.body.name,
        eventName: req.body.eventName,
        eventDate: new Date(req.body.eventDate),
        eventDescription: req.body.eventDescription,
        eventLongLat: req.body.eventLongLat,
        eventComments: req.body.eventComments
    })

    const newPost = await post.save();
    req.document = newPost;
    next();
}

module.exports = {
    createPost: createPost,
    createComment: createComment,
    getActivePosts: getActivePosts,
    getUsersPosts: getUsersPosts,
    createUserPost: createUserPost
}