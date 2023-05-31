
import React, { useState, useEffect } from "react";

import "../../styles/Clock.css";

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            <h2 className={"time"}>{date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock