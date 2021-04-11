import React, {Component} from 'react';
import { Card, Button,
    CardTitle,  CardBody, CardSubtitle, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';
// import Header from '../header_footer.js/header';
// import Footer from '../header_footer.js/footer';
import SDE from '../../images/sde.jpg'
import './home.css'

import {connect} from "react-redux";
import * as actions from "../../redux/actions/jobActions";


class Marked extends Component {

    constructor(props){
        super(props);
        // this.props.loadJobs();
        this.props.loadJobs();
        this.props.fetchMarkedJobs("19103007", this.props.status)
    }

    componentDidMount(){
        
    }

    // componentDidUpdate(){
    //     this.props.fetchMarkedJobs("19103007", "applied")
    // }


    RenderMenuItem = (job)=>{
        console.log("hey")
        console.log(job)
        return ( 
    
            <Card className='job'>
            <CardBody>
                <CardTitle tag="h6" className='job-heading'>{job.jobType} Hire</CardTitle>
            </CardBody>
                <CardImg className='job-img' src={SDE}/>
            <CardBody>
                <CardSubtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-building fa-lg mr-3 company-icon'/>    
                    {job.companyName}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-id-card mt-3 mr-2 fa-lg profile-icon'/>    
                    {job.profile}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-money mr-3 mt-3 fa-lg money-icon'/>    
                    {job.ctc} CTC
                </CardSubtitle>
                {/* <CardSubtitle tag="h6" style={{color: '#1597bb'}} className="mb-2 mt-3">
                    10-04-2021 Coding Round
                </CardSubtitle> */}
                <div className='row justify-content-center mt-4'>
                    <Link to={'/Job'}><Button className='col-12 mt-3' color='danger' onClick={()=>{this.props.fetchJob(job.jobID)}} ><span className='fa fa-lg fa-info-circle mr-2 ml-2' />View Job Details</Button></Link>
                    <Link to={'/Applied-Candidates'}><Button className='col-12 mt-3' color='danger'><span className='fa fa-lg fa-graduation-cap mr-2 ml-2' />Applied Candidates</Button></Link>
                </div>
            </CardBody>
          </Card>
        );
    }

    renderCardList = ()=>{
        let filteredJobs = this.props.JOBS.filter((job)=>{
            return this.props.statusJobs.includes(job.jobID)
        })
        return filteredJobs.map((job) => {
           
            return (
                <div className="col-12 col-lg-3 col-md-6 col-sm-6 mt-1 mb-4"  key={job.jobID}>
                    {this.RenderMenuItem(job)}
                    
                </div>
            );
        });
    }

    render(){
        return(
            
            <div>
                <div className="container jobs">
                    <div className='row justify-content-center mt-3'>
                        <h2 style={{textAlign: 'center', textShadow: '0 0 3px #FF0000'}}>{this.props.status} jobs</h2>
                    </div>
                    <div className="row  justify-content-center mt-4" >
                        { this.props.JOBS && this.props.statusJobs && this.renderCardList()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        JOBS : state.job.JOBS,
        statusJobs : state.job.statusJobs
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchMarkedJobs : (sid, status)=>dispatch(actions.fetchMarkedJobs(sid, status)),
        loadJobs : ()=>dispatch(actions.fetchAllJobs()),
        fetchJob : (jobID)=>dispatch(actions.fetchJob(jobID))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Marked);