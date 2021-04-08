import React from "react";
import {Branches} from "../../assets/Branches";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';


const SignUp1 = ()=>{
    return <div className="SignUp1Div"> <Row form>
    <Col lg={8}>
        <FormGroup>
        <Label for="sid">SID</Label>
        <Input type="text" id="sid" name="sid"/>
        <Label for="Name">Name</Label>
        <Input name="Name" id="Name" type="text"/>
      </FormGroup>
    </Col>
    <Col md={4}>
      <input type="image" src="https://lh3.googleusercontent.com/proxy/nyZm2LFh9xt25TQI515oAt0aS_5xZrvDnw4gXdworE93gkMqJ1D3PEZzBoBmh_yf12ubiyfAIiM-ADI5Pis85VNzHM9WdHRr0VoERl6-ByFASy8" className="signupImgInput" />
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="cgpa">CGPA</Label>
        <Input type="text" id="cgpa" name="cgpa"/>
      </FormGroup>
    </Col>
    <Col md={6}>
    <FormGroup>
        <Label for="branch">Select Branch</Label>
        <Input type="select" id="branch" name="branch">
        {Branches.map((branch, index)=>{
          return <option key={index} >{branch}</option>
      })}</Input>
      </FormGroup>
    </Col>
  </Row>
  <Row form><Col>
  <FormGroup>
        <Label for="email">Email Address</Label>
        <Input type="email" id="email" name="email"/>
      </FormGroup>
  </Col></Row>
  <Row form ><Col>
  <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </FormGroup>
  </Col></Row></div>
}

export default SignUp1;
