import * as React from "react";

import "../../styles/Header.css";


function Header() {

    return(
        <header>
            <div className={"pic"}>
                <img src="https://yt3.ggpht.com/a/AATXAJziAMnRSB5XtxCW8FSjPZ7OR_CbKJHVOAq7sRM3=s900-c-k-c0xffffffff-no-rj-mo" alt="logo" />
            </div>
            <div className={"name"}>
                Добро пожаловать в мир блюд!
            </div>
            <div></div>
        </header>
    );
}

export default Header;
