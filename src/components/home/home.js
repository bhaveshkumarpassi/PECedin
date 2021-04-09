import React, {Component} from 'react';
import { Card, Button, 
    CardTitle, CardBody, CardSubtitle, CardImg} from 'reactstrap';
import bg from "../../assets/bg.jpg";
import SDE from '../../images/sde.jpg'
import './home.css'

const data = [
    {id: 0, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k"},
    {id: 1, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k"},
    {id: 2, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k"},
    {id: 3, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k"},
    {id: 4, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k"},
    {id: 5, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k"},
    {id: 6, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k"},
    {id: 7, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k"},

]

class Home extends Component {

    constructor(props){
        super(props);
    }

    RenderMenuItem = (job)=>{

        return ( 
    
            <Card className='job'>
            <CardBody>
                <CardTitle tag="h6" className='job-heading'>{job.category} Hire</CardTitle>
            </CardBody>
                <CardImg className='job-img' src={SDE}/>
            <CardBody>
                <CardSubtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-building fa-lg mr-3 company-icon'/>    
                    {job.company_name}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-id-card mt-3 mr-2 fa-lg profile-icon'/>    
                    {job.Profile}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-money mr-3 mt-3 fa-lg money-icon'/>    
                    {job.CTC} CTC
                </CardSubtitle>
                <CardSubtitle tag="h6" style={{color: '#1597bb'}} className="mb-2 mt-3">
                    10-04-2021 Coding Round
                </CardSubtitle>
                <div className='row mt-4'>
                    <Button className='col-12 mt-3' color='danger'><span className='fa fa-lg fa-info-circle mr-2 ml-2' />View Details</Button>
                </div>
            </CardBody>
          </Card>
        );
    }

    renderCardList = ()=>{
        return data.map((job) => {  
            return (
                <div className="col-12 col-lg-3 col-md-6 col-sm-6 mt-1 mb-4"  key={job.id}>
                    {this.RenderMenuItem(job)}
                </div>
            );
        });
    }

    render(){
        return(
            <div style={{
                backgroundImage : `url(${bg})`,
                backgroundSize : "cover",
                height : "100%",
                padding : "5% 15% 5% 15%"
            }}>
            <div>
                <div className="container jobs">
                    <div className='row justify-content-center mt-3'>
                        <h2 style={{textAlign: 'center', textShadow: '0 0 3px #FF0000'}}>ALL JOB OPENINGS</h2>
                    </div>
                    <div className="row  justify-content-center mt-4" >
                        {this.renderCardList()}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;