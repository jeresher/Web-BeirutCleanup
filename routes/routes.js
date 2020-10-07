const { 
    createPost, 
    createComment, 
    getActivePosts, 
    getUsersPosts, 
    createUserPost,
    editUserPost, 
    deleteUserPost,
    getAllUsersPosts,
    getAllUsersAccounts,
    lockUser
} = require("../controllers/posts");
const { 
    registerUser, 
    loginUser, 
    retrieveUser 
} = require("../controllers/user");
const {
    authentication, 
    authorizationlvl1,
    authorizationlvl10
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

// AUTHORIZATION LVL 1.

router.get("/api/userposts", [authentication, authorizationlvl1, getUsersPosts], (req, res, next) => {
    res.send(req.documents);
});

router.post("/api/userposts/create", [authentication, authorizationlvl1, createUserPost], (req, res, next) => {
    res.send(req.document);
});

router.patch("/api/userposts/edit", [authentication, authorizationlvl1, editUserPost], (req, res, next) => {
    res.send(req.document);
})

router.patch("/api/userposts/delete", [authentication, authorizationlvl1, deleteUserPost], (req, res, next) => {
    res.send(req.document);
});

router.get("/api/me", [authentication, authorizationlvl1, retrieveUser], (req, res, next) => {
    res.send(req.user);
});

// AUTHORIZATION LVL 10.
router.get("/api/alluserposts", [authentication, authorizationlvl10, getAllUsersPosts], (req, res, next) => {
    res.send(req.documents);
});

router.get("/api/alluseraccounts", [authentication, authorizationlvl10, getAllUsersAccounts], (req, res, next) => {
    res.send(req.documents);
});

router.patch("/api/useraccount/lock", [authentication, authorizationlvl10, lockUser], (req, res, next) => {
    res.send(req.user);
});



module.exports = router