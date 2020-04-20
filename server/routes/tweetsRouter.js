const express = require('express');
const authController = require('../controllers/authController');
const TweetController = require('../controllers/TweetController');

const router = express.Router({ mergeParams: true });

const { protect } = authController;

const { addTweet, getTweets, uploadTweetPhoto } = TweetController;

router
  .route('/')
  .get(getTweets)
  .post(protect, uploadTweetPhoto, addTweet);

module.exports = router;
