import React from "react";

import { Link } from "react-router-dom";

import "../../styles/All.css";

const All = () => {

    const [prescriptions, setPrescriptions] = React.useState();
    const [files, setFiles] = React.useState();
    
    React.useEffect(() => {
        
        //get prescriptions data
        fetch(`http://127.0.0.1:8000/menu/api/prescription/`)
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

    }, []);

    // console.log("prescriptions:", prescriptions);
    // console.log("files:", files);


    return (
        <>
            <h2 className="home-container">
                Все блюда:
            </h2>
            <div className={"all-container"}>
                {/* <ul> */}
                {/* {prescriptions ? prescriptions.map((prescription) => (
                    <ol key={prescription.id} >
                        {prescription.files.map((fileId) => (
                            <span key={fileId}>{
                                files.map((file) => (
                                    file.id === fileId ?
                                        <img src={file.file} alt={file.name}/> : ""
                                    ))
                            } </span>
                            )
                        )} */}
                
                {prescriptions && files ? prescriptions.map((prescription) => (
                    <div key={prescription.id} className="image-item">
                            {files.map((file) => (
                                    file.id === prescription.files[0] ?
                                        <img src={file.file} alt={file.name}/> : ""
                                    ))
                            } 
                            
                        <br></br>
                        <Link to={`/all/${prescription.id}`} style={{paddingBottom:"80px"}} className="link">{prescription.name} </Link>

                    </div>
                    )
                ):"" }
                {/* </ul> */}
            </div>
        </>
    );
}

export default All;