const { 
    createPost, 
    createComment, 
    getActivePosts, 
    getUsersPosts, 
    createUserPost,
    editUserPost, 
    deleteUserPost 
} = require("../controllers/posts");
const { 
    registerUser, 
    loginUser, 
    retrieveUser 
} = require("../controllers/user");
const {
    authorization, 
    authenticationlvl1 
} = require("../controllers/auth");
const express = require('express');
const router = express.Router();

// GENERAL ROUTES.

router.get("/api/posts", getActivePosts, (req, res, next) => {
    res.send(req.documents);
});

router.post("/api/posts", createPost, (req, res, next) => {
    res.send(req.document);
});

router.post("/api/posts/:id", createComment, (req, res, next) => {
    res.send(req.document);
});

router.post("/api/register", registerUser, (req, res, next) => {
    res.send(req.user);
});

router.post("/api/login", loginUser, (req, res, next) => {
    res.send(req.user);
});

// AUTHENTICATION LVL 1.

router.get("/api/userposts", [authorization, authenticationlvl1, getUsersPosts], (req, res, next) => {
    res.send(req.documents);
});

router.post("/api/userposts/create", [authorization, authenticationlvl1, createUserPost], (req, res, next) => {
    res.send(req.document);
});

router.patch("/api/userposts/edit", [authorization, authenticationlvl1, editUserPost], (req, res, next) => {
    res.send(req.document);
})

router.patch("/api/userposts/delete", [authorization, authenticationlvl1, deleteUserPost], (req, res, next) => {
    res.send(req.document);
});

router.get("/api/me", [authorization, authenticationlvl1, retrieveUser], (req, res, next) => {
    res.send(req.user);
});




module.exports = router