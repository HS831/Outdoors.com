const express = require('express');
const viewsController = require('../controller/viewsController');
const authController = require('../controller/authController');

const router = express.Router();
router.use(authController.isLoggedIn);

router.get('/', viewsController.getFrontPage);
router.get('/discover', viewsController.getOverview);
router.get('/tour/:slug', viewsController.getTour);
router.get('/login', viewsController.getloginForm);
router.get('/forgotPassword', viewsController.getForgotPasswordForm);
router.get('/signup', viewsController.getsignupForm);
router.get('/create-review', viewsController.getreviewForm);
router.get('/me', authController.protect, viewsController.myaccount);

module.exports = router;
