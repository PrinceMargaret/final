const express = require("express");
const router = express.Router();
const {
  getPlayLists,
  AddSongToPlayList,
  createPlaylist,
  getSinglePlayList,
  deletePlaylist,
  deleteSongToPlaylist,
} = require("../controllers/PlayListController");

/**
 * @swagger
 * components:
 *   schemas:
 *     playlistSchema:
 *       type: object
 *       required:
 *         - _id
 *         - playlistName
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the Playlist
 *         playlistName:
 *           type: string
 *           description: Name of the Playlist
 *         songs:
 *             [
 *           type: Schema.Types.Mixed
 *           description: The book author
 *              ]
 *       example:
 *         {
 * name: Playlists}
 */

/**
 * @swagger
 * tags:
 *   name: Playlists
 *   description: The Playlists managing API
 */

/**
 * @swagger
 * /api/getPlaylist:
 *   get:
 *     summary: Returns the list of all the Playlists
 *     tags: [Playlists]
 *     responses:
 *       200:
 *         description: The list of the Playlists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/playlistSchema'
 *          example: 
 *                
 */
router.get("/getPlaylist", getPlayLists);

/**
 * @swagger
 * /api/getPlaylist/{id}:
 *   get:
 *     summary: Get the Playlist by id
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The playlist id
 *     responses:
 *       200:
 *         description: The playlist description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/playlistSchema'
 *       404:
 *         description: The book was not found
 */
router.get("/getPlaylist/:id", getSinglePlayList);

/**
 * @swagger
 * /api/createPlaylist:
 *   post:
 *     summary: Create a new Playlist
 *     tags: [Playlists]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/playlistSchema'
 *     responses:
 *       200:
 *         description: The playlist was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/playlistSchema'
 *       500:
 *         description: Some server error
 */
router.post("/createPlaylist", createPlaylist);

/**
 * @swagger
 * /api/addSongToPlaylist/{playlistId}:
 *   post:
 *     summary: Add Song to Playlist
 *     tags: [Playlists]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/playlistSchema'
 *     responses:
 *       200:
 *         description: Song Addedd successfully to the Playlist
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/playlistSchema'
 *       500:
 *         description: Some server error
 *      
 */
router.post("/addSongToPlaylist/:playlistId", AddSongToPlayList);

/**
 * @swagger
 * /api/deleteSongToPlaylist/{playlistId}/{SongId}:
 *   delete:
 *     summary: Remove the song from the Playlist
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         playlistId: playlistId
 *         SongId: SongId
 *         schema:
 *           type: string
 *         required: true
 *         description: Playlist ID and Song Id
 *
 *     responses:
 *       200:
 *         description: The song was deleted from Playlist
 *       404:
 *         description: The song was not found
 */
router.delete(
  "/deleteSongToPlaylist/:playlistId/:SongId",
  deleteSongToPlaylist
);

/**
 * @swagger
 * /api/deletePlaylist/{id}:
 *   delete:
 *     summary: Remove the Playlist by id
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Playlist id
 *
 *     responses:
 *       200:
 *         description: The Playlist was deleted
 *       404:
 *         description: The Playlist was not found
 */
router.delete("/deletePlaylist/:id", deletePlaylist);

module.exports = router;
