const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  fileType: {
    type: String,
    enum: ['text', 'pdf', 'image'],
    required: true,
  },
  originalFile: {
    type: String,  // URL or path to the original file
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Memory', MemorySchema);