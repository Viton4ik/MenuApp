import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Clock from "../Clock/Clock.jsx";

import "../../styles/Nav.css";


function Nav(props) {


        return (
        <nav >
            <div className="container">
                <div>
                    <Link to='/'>Главная</Link>
                </div>
                <div>
                    <Link to='/categories'>Категории</Link><>   </>
                </div>
                <div>
                    <Link to='/all'>Все блюда</Link><>   </>
                </div>
                {/* <div>
                    <Link to='/users'>Users</Link><>   </>
                    <Link to='/users/15'>15</Link><>   </>
                    <Link to='/swagger'>Swagger</Link>
                </div>        */}
            </div>

        <div className="time">
            <div className="clock">
                <Clock/>
            </div>
        </div>
        </nav>
    );
}

export default Nav;
