var User = require("../models/user");
const auth = require('./auth');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//REGISTER A USER.
const registerSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})


async function registerUser(req, res, next) {
    //VALIDATE THE DATA A USER PROVIDED.
    const { error } = registerSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // CHECK IF THE EMAIL ALREADY EXISTS IN THE DATABASE.
    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send('Email already exists.');

    // HASH THE PASSWORD.
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // CREATE USER.
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });


    const newUser = await user.save();
    req.user = newUser;
    next();
}


//LOGIN A USER.
const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})

async function loginUser (req, res, next) {

    //VALIDATE THE DATA A USER PROVIDED.
    const { error } = loginSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // CHECK IF EMAIL EXISTS.
    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).send('Email doesn\'t exist.');

    // CHECK IF PASSWORD IS CORRECT.
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Password is invalid.');

    // CREATE & ASSIGN A TOKEN.
    const token = user.generateAuthToken();
    res.header('auth-token', token); 

    req.user = user;
    next();
}

// RETRIEVE A USER.
async function retrieveUser (req, res, next) {

    // RETRIEVE USER INFORMATION (excluding password).
    const user = await User.findById(req.user._id).select('-password'); 
    res.send(user);

}

module.exports = {
    registerUser: registerUser,
    loginUser: loginUser,
    retrieveUser: retrieveUser
}