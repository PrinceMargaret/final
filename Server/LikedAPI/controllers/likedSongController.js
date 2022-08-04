const repo=require('../repository/LikedSongRepository');

function addLikedSong(req,res){
    console.log(req.body,"controller")
    repo.addLikedSong(req.body.likedSong).then(data=>{
        res.status(201).send(data);
    }).catch(err=>{
        res.status(500).send(err);
    }).finally(()=>{
        res.end();
    }
    );
}

function getLikedSong(req,res){
    repo.GetLikedSong().then(data=>{
        console.log(data,"getlikedSong")
        res.status(200).send(data);
    }).catch(err=>{
        res.status(500).send(err);
    }).finally(()=>{
        res.end();
    }
    );
}
function CreateSong(req,res){
    console.log("createSong")

    repo.CreateSong(req.body).then(data=>{
        res.status(201).send(data);
    }
    ).catch(err=>{
        res.status(500).send(err);
    }
    ).finally(()=>{
        res.end();
    }
    );
}

function removeLiked(req,res){
    console.log(req.params.SongId,"removeLiked")

    repo.removeLiked(req.params.SongId).then(data=>{
        res.status(201).send(data);
    }
    ).catch(err=>{
        res.status(500).send(err);
    }
    ).finally(()=>{
        res.end();
    }
    );
}



module.exports={addLikedSong  , getLikedSong,CreateSong,removeLiked};