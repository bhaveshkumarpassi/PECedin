import React from "react";
import {Branches} from "../../assets/Branches";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import user from "../../assets/user.png";


const SignUp1 = ()=>{
    return <div className="SignUp1Div"> <Row form>
    <Col lg={8}>
        <FormGroup>
        <Label  className = "SignupDivLabel" for="sid">SID</Label>
        <Input type="text" id="sid" name="sid"/>
        <Label  className = "SignupDivLabel" for="Name">Name</Label>
        <Input name="Name" id="Name" type="text"/>
      </FormGroup>
    </Col>
    <Col md={4}>
      <center><input type="image" src={user} className="signupImgInput" /></center>
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label  className = "SignupDivLabel" for="cgpa">CGPA</Label>
        <Input type="text" id="cgpa" name="cgpa"/>
      </FormGroup>
    </Col>
    <Col md={6}>
    <FormGroup>
        <Label className = "SignupDivLabel"  for="branch">Select Branch</Label>
        <Input type="select" id="branch" name="branch">
        {Branches.map((branch, index)=>{
          return <option key={index} >{branch}</option>
      })}</Input>
      </FormGroup>
    </Col>
  </Row>
  <Row form><Col>
  <FormGroup>
        <Label  className = "SignupDivLabel" for="email">Email Address</Label>
        <Input type="email" id="email" name="email"/>
      </FormGroup>
  </Col></Row>
  <Row form ><Col>
  <FormGroup>
        <Label  className = "SignupDivLabel" for="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </FormGroup>
  </Col></Row></div>
}

export default SignUp1;
