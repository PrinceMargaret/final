// playlist model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likedSongSchema = new Schema({
  //mixed type is used to store any type of data
  likedSong: [
    {
      type: Schema.Types.Mixed,
    },
  ],
});

module.exports = mongoose.model("likedSong", likedSongSchema, "likedSong");
