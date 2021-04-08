import React from "react";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import { Profiles } from "../../assets/profiles";

const SignUp2 = ()=>{
    return <div>
        <Row form>
        <FormGroup form >
            <Label for="profileOptions">Select Job / Internship Prefernces</Label>
            <Row id="profileOptions" check>
            {Profiles.map((profile)=>{
                return <Col lg="4"><Label check>
                <Input type="checkbox" />{' '}{profile}</Label></Col>
            })}
            </Row>
      </FormGroup>
      <FormGroup form>
          <Label for="resume">Select Resume</Label>
          <Input type="file" id="resume"/>
      </FormGroup>
        </Row>
    </div>
}

export default SignUp2;