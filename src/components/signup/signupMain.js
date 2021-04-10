import React, {useState} from "react";
import {Button} from "reactstrap";
import SignUp1 from "./signup1";
import SignUp2 from "./signup2";
import signupBG from "../../assets/signupBG.jpg";
import "./signup.css";


const SignUpMain = ()=>{

    const [signupCred, setSignupCred] = useState({
        sid : "",
        name : "",
        cgpa : "",
        branch : "Aerospace Engineering",
        email : "",
        password : "",
        preferences : [],
        // resume : null
    })

    const onChangeHandler = (event)=>{
        setSignupCred((prevCred)=>{
            return {
                ...prevCred,
                [event.target.name] : event.target.value
            }
        })
    }

    const changePreferences = (preferencesArr)=>{
        setSignupCred((prev)=>{
            return {
                ...prev,
                preferences : preferencesArr
            }
        })
    }

    const [stage, changeStage] = useState(true);
    const clickHandler = ()=>{
        changeStage((prevStage)=>!prevStage);
        console.log(signupCred)
    } 
    let content = null;
    if(stage){content = <SignUp1 onChangeHandler = {onChangeHandler} signupCred = {signupCred} />}
    else{content=<SignUp2 changePreferences = {changePreferences} signupCred = {signupCred}  />}

    return <div style={{
        backgroundImage : `url(${signupBG})`,
        backgroundSize : "cover",
        height : "100%",
        padding : "5% 15% 5% 15%"
    }}> <div className="SignupDiv">
    {content}
    <Button onClick={clickHandler} style={{
        background : "#495867",
        color : "#F7F7FF",
    }} >Submit</Button>
    </div></div>

}

export default SignUpMain;