const express = require("express");
const passport = require("passport");
const {RegisterUser, UserLogin, PasswordReset, SendMail } = require("../Controller/UserController");
const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     UserSchema:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Username of the User
 *         email: 
 *           type: string
 *           description: Email of the User
 *         password: 
 *           type: string
 *           description: Password of the User
 *         
 *       example:
 *         username: Paras Singh
 *         email: paras@gmail.com
 *         password: jyfbsruufbrs56w4b4bkh4732h
 *         
 */

 /**
  * @swagger
  * tags:
  *   name: Authentication API
  *   description: The Authentication managing API
  */

 /**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Create a new User
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSchema'
 *     responses:
 *       200:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSchema'
 *       500:
 *         description: Some server error
 */
router.post("/register", RegisterUser);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSchema'
 *     responses:
 *       200:
 *         description: The User was successfully Logged In
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSchema'
 *       500:
 *         description: Some server error
 */
router.post("/login", UserLogin);

/**
 * @swagger
 * /api/resetpassword:
 *   post:
 *     summary: Reset Password of the User
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSchema'
 *     responses:
 *       200:
 *         description: The User Password was successfully Changed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSchema'
 *       500:
 *         description: Some server error
 */
router.post('/resetpassword', PasswordReset);

/**
 * @swagger
 * /api/forgotpassword:
 *   post:
 *     summary: Forgot Password of the User
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSchema'
 *     responses:
 *       200:
 *         description: OTP Sent to the Mail of User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSchema'
 *       500:
 *         description: Some server error
 */
router.post("/forgotpassword", SendMail);


//router.get("/home", GetUser);
// router.get('/auth/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] }));
// router.get("/google/callback", passport.authenticate('google', {successRedirect: "/home", failureRedirect: "/login"}));


module.exports = router;