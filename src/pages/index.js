import React from "react"
import App from "./app";
import { Router } from '@reach/router';


const IndexPage = () => (
  <>
    <Router>     
        <App  path="/" />
    </Router>
  </>
)
    
export default IndexPage;
