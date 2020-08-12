const { createPost, createComment, getActivePosts } = require("../controllers/posts");
const express = require('express');
const router = express.Router();


router.get("/api/posts", getActivePosts, (req, res, next) => {
    res.send(req.documents);
});

router.post("/api/posts", createPost, (req, res, next) => {
    res.send(req.document);
});

router.post("/api/posts/:id", createComment, (req, res, next) => {
    res.send(req.document);
});


module.exports = router