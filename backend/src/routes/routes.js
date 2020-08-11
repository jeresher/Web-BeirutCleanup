const createPost = require("../controllers/posts").createPost;
const express = require('express');
const router = express.Router();


router.post("/api/posts", createPost, (req, res, next) => {
    res.send(req.document);
});

router.


module.exports = router