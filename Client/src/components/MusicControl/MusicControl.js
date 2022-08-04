import React from 'react'
import MusicAlbum from '../MusicAlbum/MusicAlbum'
import SongSlider from '../SongSlider/SongSlider'
import VolumeControl from '../VolumeControl/VolumeControl'
import './MusicControl.css'

export default function MusicControl() {
  return (
    <div className='MusicControl'>
      <div className='MusicAlbumDiv'>
      <MusicAlbum/>
      </div>
      <div className='SongSliderDiv'>
      <SongSlider/>
      </div>
      <div className='VolumeControlDiv'>
      <VolumeControl/>
      </div>
    </div>
  )
}
