import React from 'react';
import { Jumbotron, Button,Row,Col,Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
import signupBG from '../../assets/addJob.jpg';
import bhavesh from '../../assets/Bhavesh.jpeg';
import shivam from '../../assets/shivam.png';
import nisha from '../../assets/Nisha.jpeg';
import {Link} from 'react-router-dom';
import './aboutUs.css';
import aboutUs from '../../assets/aboutUs.jpg';

const Aboutus = () => {
  return ( <>
    
    <div>
       <div className="container">
       <div className='row justify-content-center mt-3' style={{
        backgroundImage : `url(${signupBG})`,
        backgroundSize : "cover",
        padding : "5%",
        marginTop:'4px',
        borderRadius:'0.8px'
    }}>
      <Jumbotron style={{opacity:0.9}} mt-2 mr-2>
        <div>
        <Row>
        <h4 className="display-8" style={{fontStyle:'oblique',fontWeight:'bolder',color:'black'}}>PECedIN-Gateway for the Placements and Internships</h4>
        </Row>
        <Row>
        <p className="lead">Aim to build a CRM (Customer Relationship Management) application which can help the Training Placement Office of our college to manage the student data during the internship and placement cycle.Connect with us to get better experience about your internship and placement process.</p>
        </Row>
        <hr className="my-2" />
        <p>To have a wonderful experience about your placement process connect with us NOW!!.</p>
        <p className="lead">
          <Button color="primary" to="/login"><Link to="/Login"><b style={{color:'white'}}>Login</b></Link></Button>
        </p>
        </div>
      </Jumbotron>
      </div>
      <div className="row  justify-content-center mt-4" >
      <Button style={{textAlign: 'center',fontStyle:'initial',fontWeight:'bold',borderStyle:'ridge',background:'#0e76a8',color:'white',borderradius:'20px' ,height:'50px',width:'75%'}}><h3>Meet Our Developers Team</h3></Button>
      </div>
      <div className="row  justify-content-center mt-4" >
      <CardGroup>
      <Card className="shivam-card">
        <CardImg top width="50%" className="shivam-img" src={bhavesh} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" style={{textAlign:'center',fontWeight:'bolder',fontStyle:'inherit'}}>Shivam Arora</CardTitle>
          <CardSubtitle tag="h6" className="mb-2" style={{textAlign:'center',fontWeight:'bold',fontStyle:'italic',color:'blue'}}>Branch: CSE</CardSubtitle>
          <CardText style={{textAlign:'center',fontWeight:'bold',fontStyle:'normal'}}>Roles: Frontend & Backend Development.</CardText>
          <div className="row justify-content-between mt-5 mb-3">
                <Button
                  target="new"
                  href="https://www.linkedin.com/in/bhavesh-kumar-9ab7061b1/"
                  className="col-2 fa fa-linkedin linked ml-2"
                  style={{background: '#0e76a8',
                  borderradius: '20px'}}
                  
                />
                <Button
                  target="new"
                  href="https://github.com/bhaveshkumarpassi"
                  variant="secondary"
                  className="col-2 fa fa-github git"
                  style={{background: 'rgb(243, 79, 79)',
                  borderradius: '20px'}}
                />
                <Button
                  target="new"
                  href="https://www.instagram.com/_bhavesh__kumar/"
                  className="col-2 fa fa-instagram insta"
                  style={{background: '#DD2A7B',
                  borderradius: '100px'}}
                />
                <Button
                  target="new"
                  href="mailto:bkpassi2017@gmail.com"
                  variant="success"
                  className="col-2 fa fa-envelope mail mr-2"
                  style={{
                  background:'rgb(243, 211, 105)',
                  borderradius: '100px'}}
                />
              </div>
          

        </CardBody>
      </Card>
      
      <Card className="shivam-card">
        <CardImg top width="50%" className="shivam-img" src={shivam} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" style={{textAlign:'center',fontWeight:'bolder',fontStyle:'inherit'}}>Shivam Arora</CardTitle>
          <CardSubtitle tag="h6" className="mb-2" style={{textAlign:'center',fontWeight:'bold',fontStyle:'italic',color:'blue'}}>Branch: CSE</CardSubtitle>
          <CardText style={{textAlign:'center',fontWeight:'bold',fontStyle:'normal'}}>Roles: Frontend & Backend Development.</CardText>
          <div className="row justify-content-between mt-5 mb-3">
                <Button
                  target="new"
                  href="https://www.linkedin.com/in/shivam-arora-911765191/"
                  className="col-2 fa fa-linkedin linked ml-2"
                  style={{background: '#0e76a8',
                  borderradius: '20px'}}
                  
                />
                <Button
                  target="new"
                  href="https://github.com/shivam-arora-13"
                  variant="secondary"
                  className="col-2 fa fa-github git"
                  style={{background: 'rgb(243, 79, 79)',
                  borderradius: '20px'}}
                />
                <Button
                  target="new"
                  href="https://www.instagram.com/arora_shivam.me/"
                  className="col-2 fa fa-instagram insta"
                  style={{background: '#DD2A7B',
                  borderradius: '100px'}}
                />
                <Button
                  target="new"
                  href="mailto:arorashivamme@gmail.com"
                  variant="success"
                  className="col-2 fa fa-envelope mail mr-2"
                  style={{
                  background:'rgb(243, 211, 105)',
                  borderradius: '100px'}}
                />
              </div>
          

        </CardBody>
      </Card>
      <Card className="shivam-card">
        <CardImg top width="50%" className="shivam-img" src={nisha} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5" style={{textAlign:'center',fontWeight:'bolder',fontStyle:'inherit'}}>Nisha</CardTitle>
          <CardSubtitle tag="h6" className="mb-2" style={{textAlign:'center',fontWeight:'bold',fontStyle:'italic',color:'blue'}}>Branch: CSE</CardSubtitle>
          <CardText style={{textAlign:'center',fontWeight:'bold',fontStyle:'normal'}}>Roles: Frontend Development.</CardText>
          <Row></Row>
          <div className="row justify-content-between mt-5 mb-3">
                <Button
                  target="new"
                  href="https://www.linkedin.com/in/nisha-270102/"
                  className="col-2 fa fa-linkedin linked ml-2"
                  style={{background: '#0e76a8',
                  borderradius: '20px'}}
                  
                />
                <Button
                  target="new"
                  href="https://github.com/Nisha2701"
                  variant="secondary"
                  className="col-2 fa fa-github git"
                  style={{background: 'rgb(243, 79, 79)',
                  borderradius: '20px'}}
                />
                <Button
                  target="new"
                  href="https://www.instagram.com/nishaa_2702/"
                  className="col-2 fa fa-instagram insta"
                  style={{background: '#DD2A7B',
                  borderradius: '100px'}}
                />
                <Button
                  target="new"
                  href="mailto:sky4189986@gmail.com"
                  variant="success"
                  className="col-2 fa fa-envelope mail mr-2"
                  style={{
                  background:'rgb(243, 211, 105)',
                  borderradius: '100px'}}
                />
              </div>
          

        </CardBody>
      </Card>
      
    </CardGroup>               
      </div>

      </div>

    </div>
      </ >
  );
};

export default Aboutus;