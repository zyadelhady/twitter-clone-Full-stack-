const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  text: {
    type: String
  },
  photo: String,
  video: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
