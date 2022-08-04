import React from 'react'
import LandingTop from '../LandingTop/LandingTop'
import LikedSongLists from '../LikedSongLists/LikedSongLiked'
import './LikedPage.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LikedPage() {
  return (
    <div className='LikedPage'>
      <ToastContainer/>
        <LandingTop/>
        <LikedSongLists/>
        </div>
  )
}
