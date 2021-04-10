import React, { useState } from "react";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import { Profiles } from "../../assets/profiles";

const SignUp2 = ({changePreferences})=>{

    const [PreferncesSet, setPreferencesSet] = useState(new Set())

    const onPrefernceChange = (event)=>{
        setPreferencesSet((prev)=>{
            if(prev.has(event.target.name)){prev.delete(event.target.name);}
            else {prev.add(event.target.name);}
            return prev;
        })
        console.log([...PreferncesSet])
        changePreferences([...PreferncesSet]);
    }
    

    return <div className="SignUp2Div">
        <Row form>
        <FormGroup form >
            <Label for="preferences"  className="SignupDivLabel">Select Job / Internship Prefernces</Label>
            <Row id="preferences" check>
            {Profiles.map((profile, index)=>{
                return <Col lg="4" className="profileOptionContainer" key={index}><Label check>
                <Input type="checkbox" name={profile} onChange={onPrefernceChange}/>{" "}{profile}</Label></Col>
            })}
            </Row>
      </FormGroup>
      <FormGroup form>
          <Label for="resume" className="SignupDivLabel">Upload Resume</Label>
          <Input type="file" id="resume" name="resume"/>
      </FormGroup>
        </Row>
    </div>
}

export default SignUp2;