import React from "react";
import { useParams } from "react-router-dom";


const User = () => {
    const params = useParams();
    // const { id } = useParams();
    return (
        <h2>
            Selected User ID: {params.id}
            {/* Selected User ID: {id} */}
        </h2>
    );
}

export default User;