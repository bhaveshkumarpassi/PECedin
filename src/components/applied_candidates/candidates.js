import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import user from "../../assets/user.png";
import resume from "../../assets/sampleResume.pdf";
import student from '../../images/student.webp';
import LoginCorousel from  "../login/loginCorousel";

    
class Candidate extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div style={{
            // backgroundColor : "red",
            backgroundImage : `url(${student})`,
            padding : "5% 10% 5% 10%",
            height: "100%",
            backgroundSize : "cover"
        }}>
        <div className='container'>
        <div className='row mt-5 mb-4'>
            <Accordion className='col-9 offset-md-2'>
            <Card>
            <Accordion.Toggle className='row align-items-center' as={Card.Header} eventKey="0">
              <Image src={user} className='ml-5 mr-5' roundedCircle />
              <div>
                  <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-user fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>STUDENT NAME -- </b>
                    Shivam Arora
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-id-card fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>STUDENT ID --  </b>
                      19103007
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-star fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>CGPA --  </b>
                      10
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-black-tie fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>BRANCH --  </b>
                      Computer Science
                   </Card.Subtitle>
                   <Button className='col-12 mt-3' variant='info' style={{fontWeight: 'bold'}} >
                       <span className='fa fa-lg fa-file-text mr-2 ml-4' />
                        View Resume
                    </Button>
              </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <center><object type="application/pdf" data={resume} className="userResume" >User Resume</object></center>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} className='row align-items-center' eventKey="1">
              <Image src={user} className='ml-5 mr-5' roundedCircle />
              <div>
                  <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-user fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>STUDENT NAME --  </b>
                      Shivam Arora
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-id-card fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>STUDENT ID --  </b>
                      19103007
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-star fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>CGPA --  </b>
                      10
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-black-tie fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>BRANCH --  </b>
                      Computer Science
                   </Card.Subtitle>
                   <Button className='col-12 mt-3' variant='info' style={{fontWeight: 'bold'}} >
                       <span className='fa fa-lg fa-file-text mr-2 ml-4' />
                        View Resume
                    </Button>
              </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} className='row align-items-center' eventKey="2">
              <Image src={user} className='ml-5 mr-5' roundedCircle />
              <div>
                  <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-user fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>STUDENT NAME --  </b>
                      Shivam Arora
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-id-card fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>STUDENT ID --  </b>
                      19103007
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-star fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>CGPA --  </b>
                      10
                   </Card.Subtitle>
                   <Card.Subtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-black-tie fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>BRANCH --  </b>
                      Computer Science
                   </Card.Subtitle>
                   <Button className='col-12 mt-3' variant='info' style={{fontWeight: 'bold'}} >
                       <span className='fa fa-lg fa-file-text mr-2 ml-4' />
                        View Resume
                    </Button>
              </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>  
        </div>

        </div>    
        );
    }
}

export default Candidate;