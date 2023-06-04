import React from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "../../styles/Prescription.css";


const Prescription = (props) => {

    const [prescription, setPrescription] = React.useState();
    const [filesId, setFilesId] = React.useState([]);
    const [files, setFiles] = React.useState('');
    const [name, setName] = React.useState();
    const [categoriesId, setCategoriesId] = React.useState([]);
    const [createTime, setCreateTime] = React.useState();
    const [categories, setCategories] = React.useState('');

    // get id
    const params = useParams();

    // get background off
    props.mainPagePic(false);
    
    React.useEffect(() => {
        
            //get prescription data
            fetch(`http://127.0.0.1:8000/menu/api/prescription/${params.id}/`)
                .then(response => {
                    const result = response.json();
                    return result;
                })
                .then(data => {
                    // console.log("fetchData:", data);
                    setName(data.name);
                    setPrescription(data.description);
                    setFilesId(data.files);
                    setCreateTime(data.createTime);
                    setCategoriesId(data.category);
                    
                })
                .catch(error => console.log('Error:', error));
        
    }, []);

    React.useEffect(() => {
        if (filesId.length > 0) {
            getFiles();
        }
    }, [filesId]);

    React.useEffect(() => {
        if (categoriesId.length > 0) {
            getCategory();
        }
    }, [categoriesId]);

    function getFiles() {
            const fetchFiles = filesId.map(fileId => {
                return fetch(`http://127.0.0.1:8000/menu/api/file/${fileId}/`)
                    .then(response => response.json());
            });
                
            Promise.all(fetchFiles)
                .then(data => {
                    // console.log("filesFetchData:", data);
                    const fileUrls = data.map(fileUrl => fileUrl.file);
                    setFiles(fileUrls);
                })
                .catch(error => console.log('Error:', error));
        
    }

    function getCategory() {
        const fetchCategory = categoriesId.map(categoryId => {
            return fetch(`http://127.0.0.1:8000/menu/api/category/${categoryId}/`)
                .then(response => response.json());
        });
            
        Promise.all(fetchCategory)
            .then(data => {
                // console.log("categoryFetchData:", data);
                const categoryNames = data.map(categoryName => categoryName.name);
                setCategories(categoryNames);

            })
            .catch(error => console.log('Error:', error));
    
}

    
    return (
        <>
            <div className="prescription-container">
                <div className="prescription-photos" >
                    {files ? files.map(file => (
                        <img key={file} src={file} alt={file} />)) : ""}
                </div>

                <div className="prescription-info">
                    <div className="prescription-info-name">
                        {name}
                    </div>
                    <div className="category">
                        <span>Категории: </span>
                        {categories ? categories.map(category => (
                            <span key={category}>
                                 <Link to='/categories' > {category} </Link>
                            </span>
                        )) : ''}
                         <p></p>
                    </div>
                    <div className="prescription">
                        {prescription}
                    </div>
                    <div className="date">
                        <span>Creation date: </span>
                        <span > {new Date(createTime).toLocaleString()}</span>
                    </div>
                    
                </div>
            </div>
          </>
    );
}

export default Prescription;