const express = require('express');
const router = express.Router();

const {addLikedSong,getLikedSong,CreateSong,removeLiked}=require('../controllers/likedSongController');

/**
 * @swagger
 * components:
 *   schemas:
 *     likedSongSchema:
 *       type: object
 *       properties:
 *         likedSong:
 *           type: Schema.Types.Mixed
 *           description: The Liked Song Data
 *  
 *       example:
 *         likedSong: [ ]
 *         
 */

 /**
  * @swagger
  * tags:
  *   name: LikedAPI
  *   description: The Liked Songs managing API
  */

 /**
 * @swagger
 * /api/addLikedSong:
 *   post:
 *     summary: Add Liked Song
 *     tags: [LikedAPI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/likedSongSchema'
 *     responses:
 *       200:
 *         description: The song was successfully Added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/likedSongSchema'
 *       500:
 *         description: Some server error
 */

router.post('/addLikedSong', addLikedSong);

/**
 * @swagger
 * /api/getLikedSong:
 *   get:
 *     summary: Returns the list of all the Liked Songs
 *     tags: [LikedAPI]
 *     responses:
 *       200:
 *         description: The list of the Liked Songs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/likedSongSchema'
 */
router.get('/getLikedSong', getLikedSong);

/**
 * @swagger
 * /api/createSong:
 *   post:
 *     summary: Create Song
 *     tags: [LikedAPI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/likedSongSchema'
 *     responses:
 *       200:
 *         description: The song was successfully Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/likedSongSchema'
 *       500:
 *         description: Some server error
 */
router.post("/createSong",CreateSong);

/**
 * @swagger
 * /api/removeLiked/{SongId}:
 *   delete:
 *     summary: Remove the Song by id
 *     tags: [LikedAPI]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Song Id
 * 
 *     responses:
 *       200:
 *         description: The Song was deleted
 *       404:
 *         description: The Song was not found
 */
router.delete("/removeLiked/:SongId",removeLiked)




module.exports = router;