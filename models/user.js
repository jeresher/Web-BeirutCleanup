const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    status: { type: String, default: "pending" },
    privileges: { type: Number, default: 1},
    registrationDate: { type: Date, default: Date.now }
})

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this.id, privileges: this.privileges}, process.env.TOKEN_SECRET);
    return token;
}

var User = mongoose.model('User', UserSchema);

module.exports = User;