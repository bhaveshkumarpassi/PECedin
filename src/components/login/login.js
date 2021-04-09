import React from "react";
import {Row, Col, FormGroup, Form, Input, Button, Label} from "reactstrap";
import {NavLink} from "react-router-dom";
import "./login.css";
// import loginBG from "../../assets/loginBG.jpg";
// import LoginCorousel from  "./loginCorousel";
import signupBG from "../../assets/signupBG.jpg";

const Login = ()=>{
    return <div style={{
        backgroundImage : `url(${signupBG})`,
        backgroundSize : "cover",
        padding : "5%"
    }}>
        <Row>
            {/* <Col lg="7"><LoginCorousel/></Col> */}
            <Col lg="7" ></Col>
            <Col lg="5">
            <Row><div className="LoginDiv">
                <Form>
                    <FormGroup>
                        <Label for="sid">SID</Label>
                        <Input id="sid" type="text"/>
                        <Label for="password">Password</Label>
                        <Input id="password" type="password"/>
                        <Row lg="4" md="4" sm="3" xs="1">
                        <Col><Label for="role1">Select Role</Label></Col>
                        <Col><Input type="radio" name="role" value="Student"/>{"Student"}</Col>
                        <Col><Input type="radio"  name="role" value="Admin"/>{"Admin"}</Col>
                        </Row>        
                    </FormGroup>
                </Form>
                <Button style={{
                    background : "#495867",
                }}>Login</Button>
                </div></Row>
            <Row><div className="LoginDiv2"><center>Don't have an account? <NavLink to="/signup" className="LoginDiv2Navlink" >Sign up</NavLink></center></div></Row>
            </Col>
        </Row>
    </div>
}

export default Login;