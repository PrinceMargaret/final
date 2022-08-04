import React from 'react'
import { useParams } from 'react-router'
import MusicControl from '../../components/MusicControl/MusicControl'
import Navbar from '../../components/Navbar/Navbar'
import PlaylistPage from '../../components/PlaylistPage/PlaylistPage'
import './Playlist.css'

export default function Playlist() {
  return (
    <div className='Playlist'>
        <Navbar/>
        <PlaylistPage/>
        {/* <footer>
          <MusicControl/>
        </footer> */}
        </div>
  )
}
