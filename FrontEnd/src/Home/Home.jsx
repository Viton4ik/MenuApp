import React from "react";

import { Link } from "react-router-dom";

import "../styles/Home.css";


const Home = (props) => {

    return (
        <div className="home-container">
            <h2>
                Наслаждайтесь разнообразием рецептов со всего мира!
            </h2>  
            <br></br>
            <h4>
                Выберите из 
                <Link to='/categories' onClick={() => props.mainPaigePic(true)} className="link"> категорий </Link>
                или используйте полный 
                <Link to='/all' onClick={() => props.mainPaigePic(false)} className="link"> список </Link>
                рецептов. 
            </h4>
        </div>
    );
}

export default Home;