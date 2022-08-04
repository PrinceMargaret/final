import React from 'react'
import './SongContent.css'
import SliderComponent_2 from '../SliderComponent_2/SliderComponent_2'
import SliderComponent from '../SliderComponent/SliderComponent'
import SliderComponent_3 from '../SliderComponent_3/SliderComponent_3'
import SliderComponent_4 from '../SliderComponent_4/SliderComponent_4'
import SliderComponent_5 from '../SliderComponent_5/SliderComponent_5'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SongContent() {
  return (
    <div className='SongContent'>
        <ToastContainer/>
        <SliderComponent/>
        <SliderComponent_2/>
        <SliderComponent_3/>
        <SliderComponent_4/>
        <SliderComponent_5/>
    </div>
    
  )
}
