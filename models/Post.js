// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: String,
  screenName: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', postSchema);
