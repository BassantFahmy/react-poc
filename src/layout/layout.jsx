import React from 'react'
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import SideNavBar from "../components/SideNavBar";
import Footer from "../components/Footer";
const layout = () => {
    const [showDrawer, handelDrawer] = useState(false)
    const clickHandle = (e) => {
        e.preventDefault();
        handelDrawer(!showDrawer)
    }
    return (
        <>
            <Navbar clickHandle={clickHandle} />
            <div className="t-flex">
                {
                    showDrawer && <SideNavBar />
                }
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default layout
