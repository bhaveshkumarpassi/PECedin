import React, {useEffect, useState} from 'react';
import { Button, Media, Label, } from 'reactstrap';
import profile_pic from '../../images/profile_pic.png';
import { LocalForm, Control, Errors } from "react-redux-form";
import './job.css'

import {connect} from "react-redux";
import * as actions from "../../redux/actions/jobActions";

const sample = {
    name : "Shivam Arora",
    sid : "19103007"
};

const RenderComments = (props) => {

    const [flag, setFlag] = useState(true)

    useEffect(()=>{
        props.fetchQueries(props.jobID);
    },[flag])

    const [query, setQuery] = useState("")
    // this.props.fetchQueries();


    return(

        <div style={{marginLeft: '3%', marginRight: '3%'}}>
            <LocalForm >
                <div className="row form-group">
                    <Label htmlFor="comment" className="col-12">
                    <span className="fa fa-lg  fa-pencil-square-o ml-1 mr-2"></span>
                        Post Query
                    </Label>
                    <div className="col-12">
                    <Control.textarea
                        model=".comment"
                        name="comment"
                        className="form-control"
                        id="comment"
                        rows="3"
                        placeholder={"Type your query here ...."}
                        value = {query}
                        onChange = {(event)=>{
                            setQuery(event.target.value)
                        }}
                    />
                    <Errors
                        className="text-danger"
                        show="touched"
                        model=".comment"
                        messages={{
                        required: "Required",
                        maxLength: "Must be 500 characters or less",
                        }}
                    />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-12">
                    <Button type="submit" style={{backgroundColor: '#FE5F55'}} onClick={()=>{
                        props.addQuery(props.jobID, sample, query);
                        setFlag(!flag)
                    }}>
                        Submit
                    </Button>
                    </div>
                </div>
            </LocalForm>
            {  props.queries && <ul className="ml-2 list-unstyled mr-2">
                {props.queries.map((comm) => {
                    return (
                        <li key={comm.id}>
                            
                            <Media className="row mt-4">
                            <Media left className="mr-0 col-4 col-md-3">
                                <Media
                                object
                                className="comments-profile-pic ml-0 "
                                src={profile_pic}
                                alt={comm.person.name}
                                />
                                <br />
                                <p className='comments-data'>
                                    <b>{comm.person.name}</b><br/>
                                    at {"01-04-2021"}
                                </p>
                            </Media>
                            <Media className="comment mr-0 col-8 col-md-9" body>
                                {comm.queryText}
                            </Media>
                            <Media>
                                {/* <Button
                                    color="danger"
                                    style={{backgroundColor: '#ec524b'}}
                                    //onClick={() => deleteComment(comm._id)}
                                >
                                    <span className="fa fa-trash"></span>
                                </Button> */}
                            </Media>
                            </Media>
                            <hr />
                        </li>
                    )})}    
            </ul>}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        queries : state.job.queries
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addQuery : (jobID, person, queryText)=>dispatch(actions.addQuery(jobID, person, queryText)),
        fetchQueries : (jobID)=>dispatch(actions.fetchQueries(jobID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderComments);