import * as React from "react";

import { Link } from "react-router-dom";

import Clock from "../Clock/Clock.jsx";

import "../../styles/Nav.css";


function Nav(props) {

        return (
        <nav >
            <div className="container">
                <div>
                    <Link to='/' onClick={() => props.mainPagePic(true)}>Главная</Link>
                </div>
                <div>
                    <Link to='/categories' onClick={() => props.mainPagePic(true)}>Категории</Link><>   </>
                </div>
                <div>
                    <Link to='/all' onClick={() => props.mainPagePic(false)}>Блюда</Link><>   </>
                </div>
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
