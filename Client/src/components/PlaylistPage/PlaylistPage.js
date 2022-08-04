import React from 'react'
import LandingTop from '../LandingTop/LandingTop'
import PlaylistSongPage from '../PlaylistSongPage/PlaylistSongPage'
import './PlaylistPage.css'

export default function PlaylistPage() {
  return (
    <div className='PlaylistPage'>
        <LandingTop/>
        <PlaylistSongPage/>
        </div>
  )
}
