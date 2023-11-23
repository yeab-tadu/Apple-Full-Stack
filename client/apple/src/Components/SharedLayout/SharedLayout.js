import React from 'react'
import Nav from '../Header/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
function SharedLayout() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default SharedLayout