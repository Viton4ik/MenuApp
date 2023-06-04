import * as React from "react";

import Nav from "./Nav/Nav.jsx";

import Home from "../Home/Home.jsx";
import All from "./All/All.jsx";
import Categories from "./Categories/Categories.jsx";
import Category from "./Categories/Category.jsx";
import Prescription from "./Prescription/Prescription.jsx";

import Users from "./Users/Users.jsx"; //doesn't work. Example only

import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../styles/Main.css";


function Main() {

    // get the address in the address line after the first '/'
    const location = useLocation(); 
    const picUrl = 'https://retailworldmagazine.com.au/wp-content/uploads/2021/08/shutterstock_384573541.jpg';

    // set main background handler ========
    location.pathname !== '/all' ? 
    document.body.style.backgroundImage = `url(${picUrl})`:
    document.body.style.backgroundImage = 'none';
    
    function mainPagePic(flag) {
        flag === true ?
            document.body.style.backgroundImage = `url(${picUrl})`:
            document.body.style.backgroundImage = 'none';
    };
    // set main background handler ========

    return(
        <main>
            <div>
                <Nav mainPagePic={ mainPagePic } />

                <Routes>
                    <Route path="/" element={<Home mainPagePic={ mainPagePic } />} />
                    <Route path="/all" element={<All />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/all/:id" element={<Prescription mainPagePic={mainPagePic} />} />
                    <Route path="/categories/:id" element={<Category mainPagePic={mainPagePic} />} />
                    
                    {/* //doesn't work. Example only */}
                    <Route path='/users' element={<Users mainPagePic={ mainPagePic } />} />
                </Routes>
            </div>
        </main>
    );
}

export default Main;