import React from 'react'
import LibraryPage from '../../components/LibraryPage/LibraryPage'
import MusicControl from '../../components/MusicControl/MusicControl'
import Navbar from '../../components/Navbar/Navbar'
import './Library.css'

export default function Library() {
  return (
    <div className='Library'>
      <Navbar/>
      <LibraryPage/>
        {/* <footer>
          <MusicControl/>
        </footer> */}
    </div>
      
  )
}
