import React from 'react'
import LandingPage from '../../components/LandingPage/LandingPage'
import MusicControl from '../../components/MusicControl/MusicControl'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
      
        <Navbar/>
        <LandingPage/>
        {/* <footer>
          <MusicControl/>
        </footer> */}
    </div>
  )
}
