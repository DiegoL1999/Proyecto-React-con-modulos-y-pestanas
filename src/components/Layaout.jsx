import React from "react";
import Header from './Header'
import Footer from './Footer'
import '../styles/components/Layaout.css'
import { Outlet } from "react-router-dom";

const Layaout = () => {
    return (
        <div className="Main">
            <Header />
             <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layaout;