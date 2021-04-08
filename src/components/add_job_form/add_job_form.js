import React, { Component } from 'react'
import {Container, Row, Col,Button,FormLabel,FormGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Jumbotron } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import './add_job_form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const branch = [{value:'CSE',label:'CSE'}, 
    {value:'Civil', label:'Civil'}, 
    {value:'Metallurgy', label:'Metallurgy'}];

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

                                <Form.Group controlId="formBasicDropdown">
                                <Form.Label><span className="form__icon"></span>Choose Branch</Form.Label>
                                <div><Select isMulti name="category" options={branch} className="basic-multi-select" value={this.state.Branch} classNamePrefix="select"/></div>
                                    
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label><span className="form__icon"></span>Timeline</Form.Label>
                                    <input name="timeline" className="form-control" type="Float" value={this.state.Timeline} placeholder="Expected Timeline of events" />
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