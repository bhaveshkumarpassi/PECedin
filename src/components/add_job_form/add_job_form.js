import React, { useState } from 'react'
import {Row, Col,Button,Label,FormGroup, Input} from 'reactstrap';
import './add_job_form.css';
import {Profiles} from "../../assets/profiles";
import {Branches} from "../../assets/Branches";
import {IoAddOutline} from "react-icons/io5";
import jobFormBG from "../../assets/jobFormBG.jpg";
import {connect} from "react-redux";
import * as jobActions from "../../redux/actions/jobActions";
import * as actionTypes from "../../redux/actions/actionTypes";
import PECAlert from "../pecAlert/pecAlert";


const Add_Job = (props)=>{

    if(props.showAlert){
        setTimeout(()=>{
            props.hideAlert()
        },5000);
    }

    const [job, setJob] = useState({
        companyName : "",
        profile : "Finance",
        description : "",
        jobType : "",
        ctc : "",
        cgpa : 0,
        branches : [],
        timeline : []
    })

    const changeHandler = (event)=>{
        setJob((prev)=>{
            return{
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }

    const [timeline, AddToTimeline] = useState([]);
    const [event, setEvent] = useState({
        date : null,
        eventText : null
    })

    const addEventHandler=()=>{
        if(event.date!==null && event.eventText!==null){
        AddToTimeline((prev)=>{
            prev =  [...prev, event];
            setJob((prevJob)=>{
                return {
                    ...prevJob,
                    timeline : prev
                }
            })
            return prev;
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

    const [selectedBranches, setBranches] = useState(new Set());

    const onBranchChange = (event)=>{
        setBranches((prev)=>{
            if(prev.has(event.target.name)){prev.delete(event.target.name);}
            else {prev.add(event.target.name);}
            setJob((prevJob)=>{
                return{
                    ...prevJob,
                    branches : [...prev]
                }
            })
            return prev;

        })
        
    }

    return <div style={{
        backgroundImage : `url(${jobFormBG})`,
        backgroundSize : "cover",
        padding : "5% 10% 5% 10%"
    }} >
        { props.showAlert && <PECAlert alertText = "JOB ADDED SUCCESSFULLY"/>}
        <div className="jobFormDiv">
        <Row form>
            <Col lg="6">
                <FormGroup>
            <Label for="companyName" className="JobLabel">Company Name</Label>
            <Input type="text" id = "companyName" name="companyName" onChange={changeHandler}/></FormGroup>
            </Col>
            <Col lg="6">
            <Label for="profile" className="JobLabel">Select Profile</Label>
        <Input type="select" id="profile" name="profile"  onChange={changeHandler}>
        {Profiles.map((profile, index)=>{
          return <option key={index} >{profile}</option>
      })}</Input>
            </Col>
        </Row>
        <Row form>
        <Col lg="12"><FormGroup><Label for="jobDescription" className="JobLabel">Description</Label>
        <Input type="textarea" id="jobDescription" name="description" onChange={changeHandler}/></FormGroup></Col>
            </Row>
            <Row lg="6"><Col><Label for="jobType" className="JobLabel">Select Type</Label></Col>
                        <Col ><Input type="radio" id="jobType" name="jobType" value="Internship" onChange={changeHandler}/>{"Internship"}</Col>
                        <Col><Input type="radio" id="jobType"  name="jobType" value="Full Time" onChange={changeHandler}/>{"Full Time"}</Col>
                        </Row>
            <Row form>
            <Col lg="6">
                <FormGroup>
            <Label for="ctc" className="JobLabel">Stipend / CTC</Label>
            <Input type="text" id = "ctc" name="ctc" onChange={changeHandler}/></FormGroup>
            </Col>
            <Col lg="6">
                <FormGroup>
            <Label for="cgpa" className="JobLabel">MIN CGPA REQUIRED</Label>
            <Input type="number" id = "cgpa" name="cgpa" min={0} max={10} onChange={changeHandler}/></FormGroup>
            </Col>
            </Row>
            <FormGroup form >
            <Label for="branches" className="JobLabel">Select Branches</Label>
            <Row id="branches" check>
            {Branches.map((branch, index)=>{
                return <Col lg="4" key={index}><Label check>
                <Input type="checkbox" name={branch} onChange={onBranchChange} />{" "}{branch}</Label></Col>
            })}
            </Row>
      </FormGroup>
      <Label className="JobLabel">ADD SELECTION TIMELINE</Label>
      <Row>
            <Col lg="9">
            <Row>
                            <Col>
                            <FormGroup><Label for="eventDate" className="JobLabel">Date</Label>
                            <Input type="Date" onChange={inputHandler} name="date" /></FormGroup>
                            </Col>
                            <Col>
                            <FormGroup><Label for="eventText" className="JobLabel">Event</Label>
                            <Input type="text" onChange={inputHandler} name="eventText" /></FormGroup>
                            </Col>
                            <Col lg="3">
                                <Label className="JobLabel">Add Event</Label>
                                <div className="addTimelineButton" onClick={addEventHandler}><IoAddOutline size="30px"/></div></Col>
                        </Row>
                {timeline.map((t, index)=>{
                    if(t.date !== null){
                        return <p key={index}> {t.date} : {t.eventText} </p>
                    }})}
            </Col>
        </Row>
      <Button onClick={()=>{
          console.log(job)
          props.addJob(job);
      }} >ADD JOB</Button>
      
      </div>
      
    </div>
}

const mapStateToProps = (state)=>{
    return{
        showAlert : state.job.showAlert
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addJob : (job)=>dispatch(jobActions.addJob(job)),
        hideAlert : ()=>dispatch({type : actionTypes.HIDE_ALERT})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Add_Job);