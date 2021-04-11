import React, {useState} from "react";
import {Row, Col, FormGroup, Form, Input, Button, Label} from "reactstrap";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {loginUser} from '../../redux/actions/auth';
import "./login.css";
import loginBG from "../../assets/loginBG.jpg";
import LoginCorousel from  "./loginCorousel";
// import signupBG from "../../assets/signupBG.jpg";


const mapDispatchToProps = dispatch => {
    
    return {
        loginUser: (email, pass) => dispatch(loginUser(email, pass))
    };
}

const Login = (props)=>{

    const [loginCred, setLoginCred] = useState({
        sid : "",
        password : "",
        role : null
    });

    const onChangeHandler = (event)=>{
        setLoginCred((prevCred)=>{
            return {
                ...prevCred,
                [event.target.name] : event.target.value
            }
        })
    }

    return <div style={{
        backgroundImage : `url(${loginBG})`,
        backgroundSize : "cover",
        padding : "5%"
    }}>
        <Row>
            <Col lg="7"><LoginCorousel/></Col>
            {/* <Col lg="7" ></Col> */}
            <Col lg="5">
            <Row><div className="LoginDiv">
                <Form>
                    <FormGroup>
                        <Label for="sid">EMAIL</Label>
                        <Input id="sid" type="text" name="sid" value={loginCred.sid} onChange={onChangeHandler}/>
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" name="password" value={loginCred.password} onChange={onChangeHandler}/>
                        <Row lg="4" md="4" sm="3" xs="1">
                        <Col><Label for="role1">Select Role</Label></Col>
                        <Col><Input type="radio" name="role" value="Student" onChange={onChangeHandler}/>{"Student"}</Col>
                        <Col><Input type="radio"  name="role" value="Admin" onChange={onChangeHandler}/>{"Admin"}</Col>
                        </Row>        
                    </FormGroup>
                </Form>
                <Button style={{
                    background : "#495867",
                }} onClick={()=>{
                    props.loginUser(loginCred.sid, loginCred.password);

                }} >Login</Button>
                </div></Row>
            <Row><div className="LoginDiv2"><center>Don't have an account? <NavLink to="/signup" className="LoginDiv2Navlink" >Sign up</NavLink></center></div></Row>
            </Col>
        </Row>
    </div>
}

export default connect(null, mapDispatchToProps)(Login);