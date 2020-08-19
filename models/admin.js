const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    status: String
})

var Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;