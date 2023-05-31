import * as React from "react";

import Nav from "./Nav/Nav.jsx";

import Home from "../Home/Home.jsx";
import All from "./All/All.jsx";
import Categories from "./Categories/Categories.jsx";

import Users from "./Users/Users.jsx";
import User from "./User/User";
import Swagger from "./Swagger/Swagger.jsx";

import { Routes, Route, Link } from "react-router-dom";

import "../styles/Main.css";


function Main() {


    return(
        <main>
            <div>
                <Nav/>

                {/* </Nav> */}

                <Routes>
                    <Route path="/" element={<Home />} />
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