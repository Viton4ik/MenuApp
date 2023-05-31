import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Routing


import App from "./components/App";

// ReactDOM.render(<App/>, document.getElementById("root"));

// Routing
ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>,
    
    document.getElementById("root")
);
