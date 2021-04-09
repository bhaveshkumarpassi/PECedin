import React, {useState} from "react";
import {Button} from "reactstrap";
import SignUp1 from "./signup1";
import SignUp2 from "./signup2";
import signupBG from "../../assets/signupBG.jpg";
import "./signup.css";

const SignUpMain = ()=>{
    const [stage, changeStage] = useState(true);
    const clickHandler = ()=>{
        changeStage((prevStage)=>!prevStage);
    } 
    let content = null;
    if(stage){content = <SignUp1/>}
    else{content=<SignUp2/>}

    return <div style={{
        backgroundImage : `url(${signupBG})`,
        backgroundSize : "cover",
        height : "100%",
        padding : "5% 15% 5% 15%"
    }}> <div className="SignupDiv">
    {content}
    <Button onClick={clickHandler} style={{
        background : "#495867",
        color : "#F7F7FF"
    }} >Submit</Button>
    </div></div>

}

export default SignUpMain;