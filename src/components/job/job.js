import React, {Component} from 'react';
import { Card, Button,CardHeader, CardFooter,
    CardBody, CardSubtitle, CardText, ButtonGroup} from 'reactstrap';
import './job.css'

import {connect} from "react-redux";
import * as actions from "../../redux/actions/jobActions";

import RenderComments from "./queries";



class JobDetail extends Component {

    constructor(props){
        super(props);
    }





    RenderJobDetail = (job)=>{

        return ( 
    
            <Card className='job'>
            <CardHeader style={{backgroundColor: '#577399'}}>
                    <h4 style={{color: 'whitesmoke'}}>
                        JOB DESCRIPTION
                    </h4>
            </CardHeader>
            <CardBody>
                <CardText className='text-muted mb-5 mt-1'>
                    <cite>
                        {job.description}
                    </cite>
                </CardText>
                <CardSubtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-building fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>COMPANY --  </b>
                    {job.companyName}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-id-card mt-3 mr-2 fa-lg profile-icon'/>
                    <b className='ml-1'>PROFILE --  </b>    
                    {job.profile}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-bars mt-3 mr-2 fa-lg profile-icon'/>
                    <b className='ml-1'>CATEGORY --  </b>    
                    {job.jobType}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-money mr-3 mt-3 fa-lg money-icon'/>
                    <b className='ml-1'>CTC --  </b>        
                    {job.ctc}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-black-tie mr-3 mt-3 fa-lg company-icon'/>
                    <b className='ml-1'>BRANCHES --  </b>        
                    {job.branches.toString()}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-check mr-3 mt-3 fa-lg money-icon'/>
                    <b className='ml-1'>CGPA CRITERIA --  </b>        
                    {job.cgpa}
                </CardSubtitle>
                {job.timeline.map((event,index)=>{
                    return <CardSubtitle key={index} tag="h6" style={{color: '#1597bb'}} className="mb-2 mt-3">
                    {event.date} : {event.eventText}
                </CardSubtitle>
                })}
                
                <div className='row justify-content-center'>
                    <ButtonGroup>
                        <Button className='mt-3' style={{backgroundColor: '#ec524b'}} onClick={()=>{
                            this.props.markJob(this.props.job.jobID, "19103007", "applied")
                        }} ><span className='fa fa-lg fa-pencil-square mr-2 ml-2' />APPLY</Button>
                        <Button className='mt-3' style={{backgroundColor: '#ec524b'}} onClick={()=>{
                            this.props.markJob(this.props.job.jobID, "19103007", "interested")
                        }}><span className='fa fa-lg fa-bookmark mr-2 ml-2' />SAVE</Button>
                    </ButtonGroup>
                </div>
            </CardBody>
            <CardFooter style={{backgroundColor: '#BDD5EA'}}>
                <h6 style={{color: '#495867'}}>
                    Posted At: 01-04-2021
                </h6>
            </CardFooter>
          </Card>
        );
    }

    render(){
        return(

                <div className="jobs mt-5" style={{marginLeft: '5%', marginRight: '5%'}}>
                                                {this.renderabc}
                        {/* <PECAlert alertText = "APPLIED TO THE JOB" /> */}
                    <div className="row mt-4" >
                        <div className='col-md-7 mb-5'>
                            { this.props.job && this.RenderJobDetail(this.props.job)} 
                        </div>
                        <div className='col-md-5'>
                            <div style={{backgroundColor: '#577399'}}>
                                <h3 style={{verticalAlign: 'center', 
                                textAlign: 'center',
                                color: 'white'
                                }}>
                                    JOB QUERIES
                                </h3>
                            </div>
                            <div className='queryMain' style={{backgroundColor: '#f0fff3'}}>
                                {this.props.job && <RenderComments jobID = {this.props.job.jobID} />}
                            </div>
                        </div>
                    </div>
                </div>
                
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        job : state.job.job,
        queries : state.job.queries,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addQuery : (jobID, person, queryText)=>dispatch(actions.addQuery(jobID, person, queryText)),
        fetchQueries : (jobID)=>dispatch(actions.fetchQueries(jobID)),
        markJob : (jobID, sid, status)=>dispatch(actions.markJob(jobID, sid, status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);