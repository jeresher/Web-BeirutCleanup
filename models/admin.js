const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    status: { type: String, default: "pending" },
    privileges: { type: Number, default: 1},
    registrationDate: { type: Date, default: Date.now }
})

AdminSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this.id, privileges: this.privileges}, process.env.TOKEN_SECRET);
    return token;
}

var Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;