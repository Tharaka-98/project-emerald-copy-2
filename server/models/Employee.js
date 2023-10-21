const mongoose = require('mongoose');

// Define a schema for your Sign Employee model
const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email addresses are unique
    },
    password: {
      type: String,
      required: true,
    },
    // Add any other user-related fields here (e.g., name, role, etc.)
  });


// Define a schema for the ContactUs data
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Define a schema for your Quote model
const QuoteSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    details : String,
    services: [String],
});

// Define the Advertisement schema
const AdvertisementSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  phone: String,
  details: String,
  image: {
    data: Buffer,
    contentType: String,
  },
  isActive: { type: Boolean, default: true }, // Define isActive as a Boolean with a default value
});

// Create a model based on the schema
const UserModel = mongoose.model('user', UserSchema);
const ContactModel = mongoose.model('contacts', ContactSchema);
const QuoteModel = mongoose.model('quotes', QuoteSchema);
const AdModel = mongoose.model('advertisements', AdvertisementSchema);

module.exports = {UserModel, ContactModel, QuoteModel, AdModel};