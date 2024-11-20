const mongoose = require('mongoose');  // Corrected 'requirie' to 'require'

const userSchema = new mongoose.Schema({  // Corrected 'schema' to 'Schema'
    task: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    createdAt: { type: Date, required: true, default: Date.now},
  });

const todoModel = mongoose.model("Todo", userSchema);
module.exports = todoModel;

