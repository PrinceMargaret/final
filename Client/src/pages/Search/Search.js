import React from 'react'
import './Search.css'
import LandingPage from '../../components/LandingPage/LandingPage'
import MusicControl from '../../components/MusicControl/MusicControl'
import Navbar from '../../components/Navbar/Navbar'
import SearchPage from '../../components/SearchPage/SearchPage'

export default function Search() {
  return (
    <div className='Search'>
        <Navbar/>
        <SearchPage/>
        {/* <footer>
          <MusicControl/>
        </footer> */}
    </div>
  )
}

