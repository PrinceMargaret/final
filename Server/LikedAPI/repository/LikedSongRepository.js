const LikedSong=require('../models/LikedSongModel');

function addLikedSong(songdata) {
    console.log(songdata ,"repository")
    
      
      return new Promise((resolve, reject) => {
        LikedSong.findOne({}, (err, data) => {
            if (!err) {

                data?.likedSong.push(songdata);
                data.save((err) => {
                    if (!err) {
                        resolve('LikedSong added to LikedSong');
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    }
    );
}


function GetLikedSong() {
    return new Promise((resolve, reject) => {
        LikedSong.find({}, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}


function CreateSong(Song) {
    return new Promise((resolve, reject) => {
        LikedSong.create({Song}, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }


        });
    });

}

function removeLiked(SongId) {
    return new Promise((resolve, reject) => {
        LikedSong.findOne({}, (err, data) => {
            if (!err) {
                data.likedSong.map((song,index)=>{
                    console.log(song.id,"songs id")
                    if(song.id==SongId){
                        data.likedSong.splice(index,1);
                    }

                }
                )
                data.save((err) => {
                    if (!err) {
                        resolve('Song removed from playlist');
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


  



module.exports={addLikedSong,GetLikedSong,CreateSong,removeLiked};