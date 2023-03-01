import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

function Index(){
    const location=useLocation()
    return(
        <div>
            <h1>hello {location.state.id} and welcome to home </h1>
        </div>
    )
}
export default Index