import React, {useState} from "react";
import {Button} from "reactstrap";
import SignUp1 from "./signup1";
import SignUp2 from "./signup2";
import "./signup.css";

const SignUpMain = ()=>{
    const [stage, changeStage] = useState(true);
    const clickHandler = ()=>{
        changeStage((prevStage)=>!prevStage);
    } 
    let content = null;
    if(stage){content = <SignUp1/>}
    else{content=<SignUp2/>}

    return <div className="SignupDiv">
    {content}
    <Button onClick={clickHandler}>Submit</Button>
    </div>

}

export default SignUpMain;