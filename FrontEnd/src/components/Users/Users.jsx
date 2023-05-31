import React from "react";
import { useLocation } from "react-router-dom";


const Users = () => {
    const location = useLocation(); // get the address in the address line
    const search = location.search; // get data after ? in the address line (query params)
    const query = new URLSearchParams(search); // get query params

    return (
        <h2>
            Search: '{location.search}'<br></br>
            Users with sorting: {query.get('sorting')} {/*  http://localhost:8002/users?sorting=www */}
        </h2>
    );
}

export default Users;