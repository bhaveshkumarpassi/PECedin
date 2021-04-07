import React from "react";
import {Branches} from "../../assets/Branches";
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';


const SignUp1 = ()=>{
    return <div className="SignUp1Div"> <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="Name">Name</Label>
        <Input name="Name" id="Name" type="text"/>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text" id="lastName" name="lastName"/>
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="sid">SID</Label>
        <Input type="text" id="sid" name="sid"/>
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
  <Row><Col>
  <FormGroup>
        <Label for="email">Email Address</Label>
        <Input type="email" id="email" name="email"/>
      </FormGroup>
  </Col></Row>
  <Row><Col>
  <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </FormGroup>
  </Col></Row></div>
}

export default SignUp1;
