const { createPost, createAdminPost, createComment, getActivePosts } = require("../controllers/posts");
const { registerAdmin, loginAdmin, retrieveAdmin } = require("../controllers/admin");
const {authorization, authenticationlvl1 } = require("../controllers/auth");
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

router.post("/api/register", registerAdmin, (req, res, next) => {
    res.send(req.admin);
});

router.post("/api/login", loginAdmin, (req, res, next) => {
    res.send(req.admin);
});

// AUTHENTICATION LVL 1.

router.post("/api/adminposts", [authorization, authenticationlvl1, createAdminPost], (req, res, next) => {
    res.send(req.document);
});

router.get("/api/me", [authorization, authenticationlvl1, retrieveAdmin], (req, res, next) => {
    res.send(req.admin);
});




module.exports = router