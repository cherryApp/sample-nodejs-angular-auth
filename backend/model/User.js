// Betöltjük a függőségeket.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// User séma létrehozása.
const User = new Schema({
    email: String,
    address: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);