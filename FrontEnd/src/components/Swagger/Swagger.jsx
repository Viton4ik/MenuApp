
import React from "react";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


const spec = {
    "openapi": "3.0.1",
    "info": {
      "title": "My App",
      "description": `This is a simple API `,
        version: 'version 1.0',
        
    },
    "paths": {

    }
  };


// export default App = () => <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
export default ()  => <SwaggerUI spec={spec} />