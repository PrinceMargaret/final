
const PlayList = require('../models/PlayListModel');
const { v4: uuidv4 } = require('uuid');

function createPlaylist(name) {

    return new Promise((resolve, reject) => {
        PlayList.create({ _id: uuidv4() , playlistName: name }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}


function getPlayLists() {
    return new Promise((resolve, reject) => {
        PlayList.find({}, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function getSinglePlayList(id){
    return new Promise((resolve, reject) => {
        PlayList.findOne({ _id: id }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function AddSongToPlayList(playlistId, songdata) {
    console.log(playlistId, songdata);
    return new Promise((resolve, reject) => {
        PlayList.findOne({ _id: playlistId }, (err, data) => {
            if (!err) {

                data.songs.push(songdata);
                data.save((err) => {
                    if (!err) {
                        resolve('Song added to playlist');
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    });
}

function deletePlaylist(playlistId) {
    return new Promise((resolve, reject) => {
        PlayList.deleteOne({ _id: playlistId }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function deleteSongToPlaylist(playlistId,songId) {
    return new Promise((resolve, reject) => {
        PlayList.findOne({ _id: playlistId }, (err, data) => {
            if (!err) {
                //console.log(data.songs,"data.songs")
                data.songs.map((song,index)=>{
                    console.log(song.favPlaylist[0].id,"songs id")
                    if(song.favPlaylist[0].id==songId){
                        data.songs.splice(index,1);
                    }

                }
                )
         


              



                //data.songs.pull(songId);
                data.save((err) => {
                    if (!err) {
                        resolve('Song added to playlist');
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    });
}



module.exports = { createPlaylist, getPlayLists, AddSongToPlayList,deletePlaylist, getSinglePlayList, deleteSongToPlaylist };