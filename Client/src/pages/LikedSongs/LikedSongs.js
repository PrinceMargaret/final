import React from 'react'
import './LikedSongs.css'
import MusicControl from '../../components/MusicControl/MusicControl'
import Navbar from '../../components/Navbar/Navbar'
import LikedPage from '../../components/LikedPage/LikedPage'

export default function LikedSongs() {
  return (
    <div className='LikedSongs'>
        <Navbar/>
        <LikedPage/>
        {/* <footer>
          <MusicControl/>
        </footer> */}
    </div>
  )
}
