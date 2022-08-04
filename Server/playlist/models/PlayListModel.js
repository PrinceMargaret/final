// playlist model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },

  playlistName: {
    type: String,
    required: true,
  },
  //mixed type is used to store any type of data
  songs: [
    {
      type: Schema.Types.Mixed,
    },
  ],
});

module.exports = mongoose.model("PlayList", playlistSchema, "PlayList");
