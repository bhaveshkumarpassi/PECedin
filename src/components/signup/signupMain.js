import React, {useState} from "react";
import {Button} from "reactstrap";
import {connect} from 'react-redux';
import { registerUser } from '../../redux/actions/auth';
import SignUp1 from "./signup1";
import SignUp2 from "./signup2";
import signupBG from "../../assets/signupBG.jpg";
import "./signup.css";

const mapDispatchToProps = dispatch => {
    
    return {
        registerUser: (creds) => dispatch(registerUser(creds))
    };
}

const SignUpMain = (props)=>{

    const [signupCred, setSignupCred] = useState({
        sid : "",
        name : "",
        cgpa : "",
        branch : "Aerospace Engineering",
        email : "",
        password : "",
        preferences : [],
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pecedin-3af7b.appspot.com/o/userProfilePics%2FNisha.jpeg?alt=media&token=0125f878-1ddc-4b65-a26b-c4775ff7f15d',
        resume : 'https://firebasestorage.googleapis.com/v0/b/pecedin-3af7b.appspot.com/o/userResume%2FsampleResume.pdf?alt=media&token=2249a45e-7cec-4c8a-8c3f-aa32dc3eb033'
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
    const clickHandler = async ()=>{
        changeStage((prevStage)=>!prevStage);

        if(stage===false){
            await props.registerUser(signupCred);
        }

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

export default connect(null, mapDispatchToProps)(SignUpMain);