var Admin = require("../models/admin");
const jwt = require('jsonwebtoken');
/* const verifyToken = require('../verifytoken'); */
const bcrypt = require('bcryptjs');


//REGISTER VALIDATION.
const Joi = require('@hapi/joi');
const registerSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})


async function registerAdmin(req, res, next) {
    //VALIDATE THE DATA A USER PROVIDED.
    const { error } = registerSchema.validate(req.body)
    if (error) res.status(400).send(error.details[0].message);

    // CHECK IF THE EMAIL ALREADY EXISTS IN THE DATABASE.
    const emailExist = await Admin.findOne({email: req.body.email})
    if (emailExist) res.status(400).send('Email already exists.');

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
    req.user = newAdmin;
    next();
}

module.exports = {
    registerAdmin: registerAdmin
}