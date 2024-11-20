// models/user.js
const mongoose = require('mongoose');  // Corrected 'requirie' to 'require'

const userSchema = new mongoose.Schema({  // Corrected 'schema' to 'Schema'
  username: { type: String, required: true },
  age: { type: Number, required: true },
});

// Add the 'isAdult' method to the userSchema
userSchema.methods.isAdult = function() {
  return this.age >= 18;
};

// Create and export the model
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
