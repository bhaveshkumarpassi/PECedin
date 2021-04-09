import React from "react";
import {Branches} from "../../assets/Branches";
import { Col, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import user from "../../assets/user.png";
import { Profiles } from "../../assets/profiles";
import {FiEdit} from "react-icons/fi";

const ProfileEdit = ()=>{
    return <div className="ProfileEdit">
         <Row form>
    <Col lg={8}>
        <FormGroup>
        <Label  className = "ProfileEditLabel"for="sid">SID</Label>
        <Input type="text" id="sid" name="sid"/>
        <Label  className = "ProfileEditLabel"for="Name">Name</Label>
        <Input name="Name" id="Name" type="text"/>
      </FormGroup>
    </Col>
    <Col md={4}>
      <center><input type="image" src={user} className="ProfileEditImg" /></center>
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label  className = "ProfileEditLabel"for="cgpa">CGPA</Label>
        <Input type="text" id="cgpa" name="cgpa"/>
      </FormGroup>
    </Col>
    <Col md={6}>
    <FormGroup>
        <Label  className = "ProfileEditLabel"for="branch">Select Branch</Label>
        <Input type="select" id="branch" name="branch">
        {Branches.map((branch, index)=>{
          return <option key={index} >{branch}</option>
      })}</Input>
      </FormGroup>
    </Col>
  </Row>
  <Row form><Col>
  <FormGroup>
        <Label  className = "ProfileEditLabel"for="email">Email Address</Label>
        <Input type="email" id="email" name="email"/>
      </FormGroup>
  </Col></Row>
  <Row form ><Col>
  <FormGroup>
        <Label  className = "ProfileEditLabel"for="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </FormGroup>
  </Col></Row>
  <Row form>
        <FormGroup form >
            <Label for="profileOptions" className = "ProfileEditLabel"  style={{ marginLeft : "1.5%" }}>Select Job / Internship Prefernces</Label>
            <div className="ProfileEditDiv2"><Row>
            {Profiles.map((profile)=>{
                return <Col lg="4"><Label>
                <Input type="checkbox" />{' '}{profile}</Label></Col>
            })}
            </Row>        </div>
      </FormGroup>
      <FormGroup form>
          <Label for="resume" className = "ProfileEditLabel" style={{ marginLeft : "1.5%" }}>Select Resume</Label>
          <Input type="file" id="resume" style={{ marginLeft : "1.5%" }}/>
      </FormGroup>
        </Row>
        <Button style={{
            backgroundColor : "#FE5F55",
            color : "F7F7FF",
            border : "#FE5F55",
        }}><FiEdit size="20px"/> Submit Changes</Button>
    </div>;
}

export default ProfileEdit;