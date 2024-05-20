import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctor from '../components/Doctor/Doctor' 
import DoctorDetails from '../pages/Doctors/DoctorDetails' 
import {Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='register' element={<Signup/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='doctor' element={<Doctor/>}/>
      <Route path='doctordetails/:id' element={<DoctorDetails/>}/>
    </Routes>
    </>
  )
}

export default Routers