import React from "react";

import axios from "axios";

import { Link } from "react-router-dom";


const Categories = () => {

    const [categories, setСategories] = React.useState([]);

    React.useEffect(() => {

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

    
    return (
        <>
            <h2 className="home-container" style={{ fontSize: "60px" }}>
                Категории:
            </h2>
            <h4 className="home-container" >
                <ul>
                {categories ? categories.map((category) => (
                    <ol key={category.id} >
                        <Link to={`/categories/${category.id}`} className="link">{category.name} </Link>
                    </ol>
                    )
                ):"" }
                </ul>
            </h4>
        </>

        
    );
}

export default Categories;