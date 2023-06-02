import React from "react";

import axios from "axios";

import { Link } from "react-router-dom";


const Categories = () => {

    const [categories, setСategories] = React.useState([]);

    React.useEffect(() => {
        // fetch(`http://127.0.0.1:8000/menu/api/category/`)
        // .then(response => {
        //     const result = response.json();
        //     return result;
        // })
        // .then(data => {
        //     console.log("fetchData:", data.results);
        //     setСategories(data.results);
        // })
        // .catch(error => console.log('Error:', error));

    axios.get(`http://127.0.0.1:8000/menu/api/category/`)
        .then(result => {
            return result;
            })
        .then((data) => {
            // console.log('axiousData:', data.data.results);
            setСategories(data.data.results);
            })
        .catch(() => {
            console.log('error');
            })

    }, []);

    // console.log("categories:", categories);
    // console.log("categories_logic:", ((categories.map(category => category.name))));
    
    return (
        <>
            <h2 className="home-container" style={{ fontSize: "60px" }}>
                Категории:
            </h2>
            <h4 className="home-container" >
                <ul>
                {categories ? categories.map((category) => (
                    <ol key={category.id} >
                        <Link to={`/${category.id}`} className="link">{category.name} </Link>
                    </ol>
                    )
                ):"" }
                </ul>
            </h4>
        </>

        
    );
}

export default Categories;