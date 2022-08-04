const apikey='37fa14ba27d26e5cefaed6b5832eb835';
var spotifyToken="BQDrjwpVSmxI9Rxgl--kfNbsJVJVW2CXb87aCDSn0PEsfaP2LJd1Pby0X_4xuq57jxarOv-MhWEzqrYO7NSTz6SQsDqEpm2SevHU_nRgV68BQmReZFHg6K5lgVW6rsM3Z6gmkZ6wK8N6dLGZXindYgcvOtH86hlT2VXhzdV3IJmMv35cgNZHMuoWM3tRd9eWDQ0"
import fetch from "node-fetch";
import request from 'request';


var client_id = '41d54e390d664bdf83024b00eafa887c';
var client_secret = 'b1e33168f8e7402ab76e49b08f70740d';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    spotifyToken=token;
    console.log(token);
  }
});


//console.log(spotifyToken);
// Search Song by name
 function SearchTrack(req,res){
    const {track}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
} 






function TopArtists(req,res){
    

    const url=`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


function TopTracks(req,res){
    
    const url=`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=India&api_key=37fa14ba27d26e5cefaed6b5832eb835&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


function TopAlbums(req,res){
    const {album}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=album.gettoptags&album=${album}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


function gettoptracksByTag(req,res){
    const {tag}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${tag}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


//Artist search
function ArtistSearch(req,res){
    const {artist}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}

//tag.getsimilar
function GetSimilarTags(req,res){
    const {tag}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=tag.getsimilar&tag=${tag}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}

//tag.getWeeklyChartList
function WeeklyChartList(req,res){
    const {tag}=req.body;
    const url=`http://ws.audioscrobbler.com/2.0/?method=tag.getWeeklyChartList&tag=${tag}&api_key=${apikey}&format=json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}



//fetch Top Artist from spotify by access token bearer token Authration bearer token
function GetTopArtist(req,res){
  // new  url  >   https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=ES
  //old url >    https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B
    //7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B old
   
    //0TnOYISbd1XYRBk9myaseg new
  //7JDnHciIofzUbFVt83w1lR
    //console.log(token);
    const url=`https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B`;
    fetch(url,{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${spotifyToken}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}

function getTrack(req,res){
    fetch("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?market=ES",{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${spotifyToken}`
        }





    })
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}


function getNewRelease(req,res){
    fetch("https://api.spotify.com/v1/browse/new-releases?country=IN&limit=10&offset=5",{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${spotifyToken}`
        }





    })
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )

    
}

function searchTrack(req,res){
    const {track}=req.query;
    console.log(track);
    //https://api.spotify.com/v1/search?q=believer&type=track%2Cartist&market=ES&limit=10&offset=5
    const url=`https://api.spotify.com/v1/search?q=${track}&type=track%2Cartist&limit=10&offset=5`;
    fetch(url,{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${spotifyToken}`
        }

    })
    .then(res=>res.json())
    .then(data=>{
        res.send(data);
    }
    ).catch(err=>{
        console.log(err);
        res.send(err);
    }
    )
}
    
 




export {SearchTrack, TopArtists, TopTracks, TopAlbums, gettoptracksByTag,  ArtistSearch, GetSimilarTags, WeeklyChartList, GetTopArtist, getTrack,getNewRelease,searchTrack};




