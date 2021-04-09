import React from "react";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import { Profiles } from "../../assets/profiles";

const SignUp2 = ()=>{
    return <div className="SignUp2Div">
        <Row form>
        <FormGroup form >
            <Label for="profileOptions"  className="SignupDivLabel">Select Job / Internship Prefernces</Label>
            <Row id="profileOptions" check>
            {Profiles.map((profile, index)=>{
                return <Col lg="4" className="profileOptionContainer" key={index}><Label check>
                <Input type="checkbox" />{' '}{profile}</Label></Col>
            })}
            </Row>
      </FormGroup>
      <FormGroup form>
          <Label for="resume" className="SignupDivLabel">Upload Resume</Label>
          <Input type="file" id="resume"/>
      </FormGroup>
        </Row>
    </div>
}

export default SignUp2;