const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const tweetsRouter = require('./tweetsRouter');

const router = express.Router();

const { signup, signin, logout, protect } = authController;

const {
  updateMe,
  getMe,
  getUser,
  resizeUserCover,
  resizeUserPhoto,
  deleteMe,
  getAllUsers,
  updateUser,
  deleteUser,
  UploadPhoto
} = userController;

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/logout').get(logout);

router.use('/:username/tweets', tweetsRouter);

router.route('/me').get(protect, getMe, getUser);

router
  .route('/update-me')
  .post(protect, UploadPhoto, resizeUserCover, resizeUserPhoto, updateMe);

router.route('/delete-me').delete(protect, deleteMe);

router.route('/:username').get(getUser);

// router.use(authController.restrictTo('admin'));

router.route('/').get(getAllUsers);

router
  .route('/:id')
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
