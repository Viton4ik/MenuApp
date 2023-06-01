import React from "react";

import axios from "axios";

const Categories = () => {

    fetch(`http://127.0.0.1:8000/menu/api/category/`)
    .then(response => {
        const result = response.json()
        return result;
        })
    .then(data => {
        console.log("data:", data.results)
        })
    .catch(error => console.log('Error:', error))
      
    
    // axios.get(`http://127.0.0.1:8000/menu/api/category/`)
    //     .then(result => {
    //         return result;
    //         })
    //     .then((data) => {
    //         console.log('data:', data);
    //         })
    //     .catch(() => {
    //         console.log('error');
    //         })

      
    
    return (
        <h2>
            Categories
        </h2>
    );
}

export default Categories;