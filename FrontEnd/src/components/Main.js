import * as React from "react";

import Nav from "./Nav/Nav.jsx";

import Home from "../Home/Home.jsx";
import All from "./All/All.jsx";
import Categories from "./Categories/Categories.jsx";

import Users from "./Users/Users.jsx";
import User from "./User/User";
import Swagger from "./Swagger/Swagger.jsx";

import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../styles/Main.css";


function Main() {

    // get the address in the address line after the first '/'
    const location = useLocation(); 

    // set main background handler
    location === '/all' ? document.body.style.backgroundImage = 'url("https://i0.wp.com/mvslim.com/wp-content/uploads/2016/06/finch-fork-final-33-a8804fa5.jpg?w=1700&ssl=1")' : "none";
    
    function mainPaigePic(flag) {
        flag === true ?
            document.body.style.backgroundImage = 'url("https://i0.wp.com/mvslim.com/wp-content/uploads/2016/06/finch-fork-final-33-a8804fa5.jpg?w=1700&ssl=1")':
            document.body.style.backgroundImage = 'none';
    };


    return(
        <main>
            <div>
                <Nav mainPaigePic={ mainPaigePic } />

                {/* </Nav> */}

                <Routes>
                    <Route path="/" element={<Home mainPaigePic={ mainPaigePic } />} />
                    <Route path="/all" element={<All />} />
                    <Route path="/categories" element={<Categories />} />

                    {/* <Route path='/users' element={<Users />} />
                    <Route path="/users/:id" element={<User />} />
                    <Route path="/swagger" element={<Swagger />} /> */}
                </Routes>
            </div>
        </main>
    );
}

export default Main;