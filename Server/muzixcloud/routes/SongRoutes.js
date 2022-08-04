import express from 'express';
const router=express.Router();
import {SearchTrack, TopArtists, TopTracks, TopAlbums, gettoptracksByTag,  ArtistSearch, GetSimilarTags, WeeklyChartList,GetTopArtist,getTrack,getNewRelease,searchTrack} from '../controllers/SongControllers.js';


router.post('/search', SearchTrack);
router.get("/topArtists", TopArtists);
router.get("/topTracks", TopTracks);
router.post("/topAlbums", TopAlbums);




router.post("/artistSearch", ArtistSearch);
router.post("/getSimilarTags", GetSimilarTags);
router.post("/weeklyChartList", WeeklyChartList);
//--------------------------------------------------------------------------
//Spotify


router.get("/getTrack", getTrack);
router.get("/GetTopArtist", GetTopArtist);
router.get("/getNewRelease",getNewRelease)
router.get("/searchTrack", searchTrack);



 export  default router;

