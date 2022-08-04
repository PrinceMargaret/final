// create playlist
fetch('https://muzixplaylist.herokuapp.com/api/createPlaylist', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        name: 'My Playlist'
    })
}).then(res => res.json())
    .then(data => console.log(data));




// get playlists
fetch('https://muzixplaylist.herokuapp.com/api/getPlaylist', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(data => console.log(data));




// add song to playlist

let playListId="e87ac5c1-b8a0-4d73-8c12-7aab23ab23c9"
fetch(`https://muzixplaylist.herokuapp.com/api//addSongToPlaylist/${playListId}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        
        song:{
            name: 'My Song',
            artist: 'My Artist',
            album: 'My Album',
            duration: '00:00:00'
        }
    })

}).then(res => res.json())
    .then(data => console.log(data));





