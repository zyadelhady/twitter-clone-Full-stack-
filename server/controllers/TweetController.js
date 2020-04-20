const multer = require('multer');
const catchAsync = require('../utils/catchAsync');
const Tweet = require('../models/tweetModel');
const User = require('../models/userModel');
const AppError = require('../utils/appError');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'data');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `tweet-img-${req.user._id}-${Date.now()}.${ext}`);
  }
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an Image please upload only images'));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadTweetPhoto = upload.single('tweetPhoto');

exports.addTweet = catchAsync(async (req, res, next) => {
  const createObj = {
    ...req.body,
    user: req.user._id
  };
  if (req.file) createObj.photo = req.file.filename;
  if (req.file) console.log(req.file);

  let newTweet = await Tweet.create(createObj);

  newTweet = { ...newTweet._doc, user: req.user };

  res.status(200).json({
    status: 'success',
    data: {
      data: newTweet
    }
  });
});

exports.getTweets = catchAsync(async (req, res, next) => {
  const filter = {};

  if (req.params.username) {
    const user = await User.findOne({ username: req.params.username });
    filter.user = user._id;
  }

  const tweets = await Tweet.find(filter)
    .populate({ path: 'user' })
    .sort('-createdAt');

  res.status(200).json({
    status: 'success',
    results: tweets.length,
    data: {
      data: tweets
    }
  });
});
