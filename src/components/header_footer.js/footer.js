import React,{Component} from 'react';
import {FaFacebook,FaTwitterSquare,FaLinkedin, FaInstagram} from 'react-icons/fa';
import {Container, Row, Col} from 'react-bootstrap';
import './header_footer.css';
class footer extends Component{
    render(){
        return(
            

        <div >
            <footer>
                <div className="footerSection">
                    <Container>
                  <Row className="justify-content-md-center sharing-area text-center">
                    <Col className="text-center" lg="8" md="12">
                    <a href ="#" className ="social_links"><span className= "social_icons facebook"><FaFacebook/></span></a>
                    <a href ="#" className ="social_links"><span className= "social_icons linkedIn"><FaLinkedin/></span></a>
                    <a href ="#" className ="social_links"><span className= "social_icons twitter"><FaTwitterSquare/></span></a>
                    <a href="#" className="social_links"><span className="social_icons instagram fill"><FaInstagram></FaInstagram></span></a> 
                    </Col>
                  </Row>  
                  <Row className="justify-content-md-center sharing-area text-center" >
                  <nav>
            <p className="copyright text-center" style={{fontWeight:'bold'}}>
              © {new Date().getFullYear()}{" "}
              <a href="#">PECedIn</a>, made with
              love for a better web
            </p>
          </nav>
                  </Row>  
                </Container>
                </div>
            </footer>
        </div>
        );
    }
}
export default footer;
