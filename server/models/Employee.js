const mongoose = require('mongoose');

// Define a schema for your Sign Employee model
const UserSchema = new mongoose.Schema({
    name: String,
    password: String
});

// Define a schema for your User model
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
  });

// Define a schema for your Quote model
const QuoteSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    services: String,
    message: String,
});

const UserModel = mongoose.model('user', UserSchema);
const ContactModel = mongoose.model('contact', ContactSchema);
const QuoteModel = mongoose.model('contact', QuoteSchema);

module.exports = {UserModel, ContactModel, QuoteModel};