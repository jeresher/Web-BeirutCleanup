const { createPost, createComment } = require("../controllers/posts");
const express = require('express');
const router = express.Router();


router.post("/api/posts", createPost, (req, res, next) => {
    res.send(req.document);
});

router.post("/api/posts/:id", createComment, (req, res, next) => {
    res.send(req.document);
});


module.exports = router