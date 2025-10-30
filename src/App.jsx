import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import React from 'react'
import Navbar from './component/navbar'
import Carousel from './component/Carousel'
import About from './component/About'
import Card from './component/Card'
import News from './component/News'


export default function App(){
  return(
    <>
      <Navbar/>
      <Carousel/>
      <About/>
      <Card/>
      <News/>
    </>
  )
}