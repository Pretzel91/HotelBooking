import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../Layout/Home'
import AboutUs from '../Components/Pages/AboutUs'
import Contact from '../Components/Pages/Contact'
import Login from '../Components/Header/Login';
import Destinations from '../Components/Pages/Destinations';
import Rooms from '../Components/Hotel/Room';
import Reservation from '../Components/Hotel/Reservation'
// import Register from '../Pages/Register'
import SearchResultList from '../Components/Hotel/SearchResultList';





const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/destinations' element={<Destinations/>} />
        <Route path='/rooms' element={<Rooms/>} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/searchReservation' element={<SearchResultList/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/register' element={<Register/>} /> */}
    </Routes>
  )
}

export default Routers;

