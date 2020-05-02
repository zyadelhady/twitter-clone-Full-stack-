const multer = require('multer');
const sharp = require('sharp');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/userModel');
const factory = require('./handlerFactory');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.files.photo) return next();

  req.files.photo[0].filename = `user-photo-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.files.photo[0].buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`data/${req.files.photo[0].filename}`);

  next();
});

exports.resizeUserCover = catchAsync(async (req, res, next) => {
  if (!req.files.cover) return next();

  req.files.cover[0].filename = `user-cover-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.files.cover[0].buffer)
    .resize({ width: 354, height: 174 })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`data/${req.files.cover[0].filename}`);

  next();
});

exports.UploadPhoto = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'cover', maxCount: 1 }
]);
// exports.uploadUserCover = upload.single('cover');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.username = req.user.username;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('this route is not for password update', 400));
  }
  if (req.body.username) {
    req.body.username.replace(/\s+/g, '');
  }
  const filterBody = filterObj(req.body, 'name', 'email', 'username', 'Bio');

  if (req.files) {
    if (req.files.cover) {
      filterBody.cover = req.files.cover[0].filename;
    }
    if (req.files.photo) {
      filterBody.photo = req.files.photo[0].filename;
    }
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(200).json({
    status: 'success',
    data: null
  });
});

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
