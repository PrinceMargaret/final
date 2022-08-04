import React from 'react'
import LandingTop from '../LandingTop/LandingTop'
import SearchBarPage from '../SearchBarPage/SearchBarPage'
import './SearchPage.css'

export default function SearchPage() {
  return (
    <div className='SearchPage'>
        <LandingTop/>
        <SearchBarPage/>
    </div>
  )
}
