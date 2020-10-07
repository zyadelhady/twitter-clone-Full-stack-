const multer = require('multer');
const cloudinary = require('cloudinary').v2;
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
  if (req.file) {
    const photo = await cloudinary.uploader.upload(`data/${req.file.filename}`);
    createObj.photo = photo.secure_url;
  }
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

  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;

  const tweets = await Tweet.find(filter)
    .sort('-createdAt')
    .skip(skip)
    .limit(limit)
    .populate({ path: 'user' });

  // tweets = tweets.skip(skip).limit(limit);

  // tweets = tweets.populate({ path: 'user' }).sort('-createdAt');

  res.status(200).json({
    status: 'success',
    results: tweets.length,
    data: {
      data: tweets
    }
  });
});
