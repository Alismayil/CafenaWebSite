import React from 'react'
import Navbar from '../navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'

function MainLayout() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default MainLayout