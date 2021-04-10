
import React, {useState} from "react";
import {Row, Col, FormGroup, Label, Input} from "reactstrap";
import {IoAddOutline} from "react-icons/io5";

const TimelineEdit = ()=>{
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
    
    return <div>
        <Row>
            <Col lg="9">
            <Row form>
                            <Col>
                            <FormGroup><Label for="eventDate">Date</Label>
                            <Input type="Date" onChange={inputHandler} name="date" /></FormGroup>
                            </Col>
                            <Col>
                            <FormGroup><Label for="eventText">Event</Label>
                            <Input type="text" onChange={inputHandler} name="eventText" /></FormGroup>
                            </Col>
                        </Row>
                {timeline.map((t, index)=>{
                    if(t.date !== null){
                        return <p key={index}> {t.date} : {t.eventText} </p>
                    }})}
            </Col>
            <Col lg="3"><div className="addTimelineButton" onClick={addEventHandler}><IoAddOutline size="20px"/></div></Col>
        </Row>
    </div>
}

export default TimelineEdit;



//css rules

// .addTimelineButton{
//     height: 30px;
//     width: 30px;
//     background-color: #FE5F55;
//     border-radius: 30px;
//     color: #F7F7FF;
//     padding-top: 1px;
//     padding-left: 5px;
//     box-shadow: 0 0 2px #FE5F55;
//     cursor: pointer;
// }

// .addTimelineButton:hover{
//     box-shadow : 0 0 5px #577399;
//     cursor: pointer;
// }