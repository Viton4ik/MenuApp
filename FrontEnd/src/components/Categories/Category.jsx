import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// import "../../styles/All.css";

const Category = (props) => {

    // get id
    const params = useParams();
    
    const [prescriptions, setPrescriptions] = React.useState();
    const [files, setFiles] = React.useState();
    const [categories, setCategories] = React.useState('');
    
    // get background off
    props.mainPagePic(false);

    React.useEffect(() => {
        
        //get prescriptions data
        fetch(`http://127.0.0.1:8000/menu/api/prescription/?category=${params.id}`)
        .then(response => {
            const result = response.json();
            return result;
        })
        .then(data => {
            // console.log("fetchData:", data.results);
            setPrescriptions(data.results);
        })
        .catch(error => console.log('Error:', error));
        
        //get files data
        fetch(`http://127.0.0.1:8000/menu/api/file/`)
        .then(response => {
            const result = response.json();
            return result;
        })
        .then(data => {
            // console.log("filesFetchData:", data.results);
            setFiles(data.results);
        })
        .catch(error => console.log('Error:', error));

        //get category data
        fetch(`http://127.0.0.1:8000/menu/api/category/${params.id}/`)
        .then(response => {
            const result = response.json();
            return result;
        })
        .then(data => {
            // console.log("categoryFetchData:", data);
            setCategories(data.name);
        })
            .catch(error => console.log('Error:', error));
        
    }, []);


    return (
        <>
            <h2 className="home-container">
                {categories} :
            </h2>
            <div className={"all-container"}>
               
                {prescriptions && files ? prescriptions.map((prescription) => (
                    <div key={prescription.id} className="image-item">
                            {files.map((file) => (
                                    file.id === prescription.files[0] ?
                                        <img key={file.name} src={file.file} alt={file.name}/> : ""
                                    ))
                            } 
                        <br></br>
                        <Link to={`/all/${prescription.id}`} style={{paddingBottom:"80px"}} className="link">{prescription.name} </Link>
                        
                    </div>
                    )
                ):"" }
            </div>
        </>
    );
}

export default Category;