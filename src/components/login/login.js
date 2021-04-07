import React from "react";
import {Row, Col, FormGroup, Form, Input, Button, Label} from "reactstrap";
import {Link} from "react-router-dom";
import "./login.css";
// import LoginCorousel from  "./loginCorousel";

const Login = ()=>{
    return <div>
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
                    background : "#577399",
                }}>Login</Button>
                </div></Row>
            <Row><div className="LoginDiv2"><center>Don't have an account? <Link to="/signup">Sign up</Link></center></div></Row>
            </Col>
        </Row>
    </div>
}

export default Login;