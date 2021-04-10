import React from "react";
import {Alert} from "reactstrap";
import "./pecAlert.css";

const PECAlert = (props)=>{
    return <div className="pecAlert"><Alert color="success"> {props.alertText} </Alert></div>
}

export default PECAlert;