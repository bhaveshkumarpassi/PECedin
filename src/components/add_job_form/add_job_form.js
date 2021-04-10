import React, { useState } from 'react'
import {Row, Col,Button,Label,FormGroup, Input} from 'reactstrap';
import './add_job_form.css';
import {Profiles} from "../../assets/profiles";
import {Branches} from "../../assets/Branches";
import {IoAddOutline} from "react-icons/io5";
import jobFormBG from "../../assets/jobFormBG.jpg";

const Add_Job = ()=>{

    const [job, setJob] = useState({
        companyName : "",
        profile : "Finance",
        description : "",
        jobType : "",
        ctc : "",
        cgpa : "",
        branches : [],
        timeline : []
    })


    const [timeline, AddToTimeline] = useState([]);
    const [event, setEvent] = useState({
        date : null,
        eventText : null
    })

    const addEventHandler=()=>{
        if(event.date!==null && event.eventText!==null){
        AddToTimeline((prev)=>{
            return [...prev, event]
        })

        setEvent({
            date : null,
        eventText : null
        })
        
    }
    }
    
    const inputHandler = (event)=>{
        setEvent((prevEvent)=>{
            return {
                ...prevEvent,
                [event.target.name] : event.target.value
            }
        })
    }

    return <div style={{
        backgroundImage : `url(${jobFormBG})`,
        backgroundSize : "cover",
        padding : "5% 10% 5% 10%"
    }} >
        <div className="jobFormDiv">
        <Row form>
            <Col lg="6">
                <FormGroup>
            <Label for="companyName">Company Name</Label>
            <Input type="text" id = "companyName" name="companyName"/></FormGroup>
            </Col>
            <Col lg="6">
            <Label for="profile">Select Profile</Label>
        <Input type="select" id="profile" name="profile">
        {Profiles.map((profile, index)=>{
          return <option key={index} >{profile}</option>
      })}</Input>
            </Col>
        </Row>
        <Row form>
        <Col lg="12"><FormGroup><Label for="jobDescription">Description</Label>
        <Input type="textarea" id="jobDescription" name="jobDescription" /></FormGroup></Col>
            </Row>
            <Row lg="6"><Col><Label for="jobType">Select Type</Label></Col>
                        <Col ><Input type="radio" id="jobType" name="jobType" value="Internship"/>{"Internship"}</Col>
                        <Col><Input type="radio" id="jobType"  name="jobType" value="Full Time"/>{"Full Time"}</Col>
                        </Row>
            <Row form>
            <Col lg="6">
                <FormGroup>
            <Label for="ctc">Stipend / CTC</Label>
            <Input type="text" id = "ctc" name="ctc"/></FormGroup>
            </Col>
            <Col lg="6">
                <FormGroup>
            <Label for="cgpa">MIN CGPA REQUIRED</Label>
            <Input type="number" id = "cgpa" name="cgpa" min={0} max={10}/></FormGroup>
            </Col>
            </Row>
            <FormGroup form >
            <Label for="branches">Select Branches</Label>
            <Row id="branches" check>
            {Branches.map((branch, index)=>{
                return <Col lg="4" key={index}><Label check>
                <Input type="checkbox" name={branch}/>{" "}{branch}</Label></Col>
            })}
            </Row>
      </FormGroup>
      <Label>ADD SELECTION TIMELINE</Label>
      <Row>
            <Col lg="9">
            <Row>
                            <Col>
                            <FormGroup><Label for="eventDate">Date</Label>
                            <Input type="Date" onChange={inputHandler} name="date" /></FormGroup>
                            </Col>
                            <Col>
                            <FormGroup><Label for="eventText">Event</Label>
                            <Input type="text" onChange={inputHandler} name="eventText" /></FormGroup>
                            </Col>
                            <Col lg="3">
                                <Label>Add Event</Label>
                                <div className="addTimelineButton" onClick={addEventHandler}><IoAddOutline size="30px"/></div></Col>
                        </Row>
                {timeline.map((t, index)=>{
                    if(t.date !== null){
                        return <p key={index}> {t.date} : {t.eventText} </p>
                    }})}
            </Col>
        </Row>
      <Button>ADD JOB</Button>
      </div>
    </div>
}


export default Add_Job;