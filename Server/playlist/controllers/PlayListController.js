const repo=require('../repository/PlayListRepository');

function getPlayLists(req, res) {
    repo.getPlayLists().then(data => {
        res.status(200).send(data);
    });
}



function AddSongToPlayList(req, res) {
    
    repo.AddSongToPlayList(req.params.playlistId, req.body).then(data => {
        res.status(201).send(data);
    });
}

function createPlaylist(req, res) {
    repo.createPlaylist(req.body.name).then(data => {
        res.status(201).send(data);
    });
}

function getSinglePlayList(req, res) {
    //console.log(req.params.id,"getSinglePlayList")
    repo.getSinglePlayList(req.params.id).then(data => {
        res.status(200).send(data);
    });
}

function deletePlaylist(req, res) {
    repo.deletePlaylist(req.params.id).then(data => {
        res.status(200).send(data);
    });
}

function deleteSongToPlaylist(req, res) {
    console.log(req.params.SongId,"deleteSongToPlaylist")
    repo.deleteSongToPlaylist(req.params.playlistId,req.params.SongId).then(data => {
        res.status(200).send(data);
    });
}


module.exports = { getPlayLists, AddSongToPlayList, createPlaylist,getSinglePlayList,deletePlaylist, deleteSongToPlaylist };