var Admin = require("../models/admin");
const auth = require('./auth');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//REGISTER VALIDATION.
const registerSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})


async function registerAdmin(req, res, next) {
    //VALIDATE THE DATA A USER PROVIDED.
    const { error } = registerSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // CHECK IF THE EMAIL ALREADY EXISTS IN THE DATABASE.
    const emailExist = await Admin.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send('Email already exists.');

    // HASH THE PASSWORD.
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // CREATE ADMIN.
    const admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });


    const newAdmin = await admin.save();
    req.admin = newAdmin;
    next();
}


//LOGIN VALIDATION.
const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})

async function loginAdmin (req, res, next) {

    //VALIDATE THE DATA A USER PROVIDED.
    const { error } = loginSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // CHECK IF EMAIL EXISTS.
    const admin = await Admin.findOne({email: req.body.email})
    if (!admin) return res.status(400).send('Email doesn\'t exist.');

    // CHECK IF PASSWORD IS CORRECT.
    const validPass = await bcrypt.compare(req.body.password, admin.password)
    if (!validPass) return res.status(400).send('Password is invalid.');

    // CREATE & ASSIGN A TOKEN.
    const token = admin.generateAuthToken();
    res.header('auth-token', token); 

    req.admin = admin;
    next();
}

async function retrieveAdmin (req, res, next) {

    // RETRIEVE USER INFORMATION (excluding password).
    const admin = await Admin.findById(req.user._id).select('-password'); 
    res.send(admin);

}

module.exports = {
    registerAdmin: registerAdmin,
    loginAdmin: loginAdmin,
    retrieveAdmin: retrieveAdmin
}