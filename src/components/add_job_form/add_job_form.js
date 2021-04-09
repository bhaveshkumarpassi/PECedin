import React, { Component } from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import Form from 'react-bootstrap/Form';
import './add_job_form.css';
import 'react-toastify/dist/ReactToastify.css';

class Add_Job extends Component {

    constructor(props){
        super(props);
    }
      
    render(){
        return(
            <div className="forms__section">
            <Container>
            <Col md={12} className="contact__main__content">
                    <Row>
                        <Breadcrumb className="mb-4 page__navigation__breadCrump">
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Add JOB</BreadcrumbItem>
                        </Breadcrumb>
                    </Row>
                    <div>
                        <Jumbotron className='form-jumbotron'>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label><span className="form__icon"></span>Title</Form.Label>
                                    <input name="title" className="form-control" type="text"  placeholder="Type the Company Name." />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label><span className="form__icon"></span>Profile</Form.Label>
                                    <input name="profile" className="form-control" type="text"  placeholder="Mention the Profile Name" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select">
                                   <option>Select</option>
                                   <option>Placement</option>
                                   <option>Full-Time</option>
                                </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect">
                                <Form.Label>Branch</Form.Label>
                                <Form.Control as="select">
                                   <option>Select</option>
                                   <option>Computer Science And Engineering</option>
                                   <option>Civil Engineering</option>
                                   <option>Metallurgy Engineering</option>
                                   <option>Electronics and Communication Engineering</option>
                                   <option>Electrical Engineering</option>
                                   <option>Production Engineering</option>
                                   <option>Aerospace Engineering</option>
                                   <option>Mechanical Engineering</option>
                                </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Tell us more about Job description" rows={3} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label><span className="form__icon"></span>CGPA</Form.Label>
                                    <input name="CGPA" className="form-control" type="number"  placeholder="Mention the CGPA Criteria if any" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label><span className="form__icon"></span>CTC(Cost To Company)</Form.Label>
                                    <input name="CTC" className="form-control" type="text"  placeholder="Mention the CTC" />
                                </Form.Group>
                                
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Tell us more about Job description" rows={3} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label><span className="form__icon"></span>Timeline</Form.Label>
                                    <input name="timeline" className="form-control" type="Float"  placeholder="Expected Timeline of events" />
                                </Form.Group>
                                <Button className='mt-4' onClick={this.handleSubmit} variant="info"><span className='fa fa-paper-plane mr-3' />Submit</Button>
                        </Form>
                      </Jumbotron>
                    </div>
            
            </Col>
            </Container>
      </div>
        )
    }
}

export default Add_Job;