import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react'
import Navbar from './component/navbar'
import Beranda from './pages/Beranda'


export default function App(){
  return(
    <>
      <Navbar/>
      <Beranda/>
    </>
  )
}