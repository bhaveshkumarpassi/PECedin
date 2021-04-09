import React,{Component} from 'react';
import {FaFacebookSquare,FaTwitterSquare,FaLinkedin, FaInstagram} from 'react-icons/fa';
import {Container, Row, Col} from 'react-bootstrap';
import './header_footer.css';
class footer extends Component{
    render(){
        return(
        <div>
            <footer>
                <div className="footerSection">
                    <Container>
                        <div className="footerSectionInner">
                            <Row>
                            <Col md={6} className="footerColumnicons">
                            <div className="footerHeading">Get Social With Us</div>
                            <div className  = "footerContent">
                                <h2>Thanks for connecting.</h2>
                                <a href ="#" className ="social_links"><span className= "social_icons facebook"><FaFacebookSquare/></span> Facebook</a>
                                <a href ="#" className ="social_links"><span className= "social_icons linkedIn"><FaLinkedin/></span>LinkedIn</a>
                                <a href ="#" className ="social_links"><span className= "social_icons twitter"><FaTwitterSquare/></span> Twitter</a>
                                <a href="#" className="social_links"><span className="social_icons instagram"><FaInstagram></FaInstagram></span>Instagram</a>
                            </div>
                            </Col>
                            </Row>
                            <br/>
                            <hr></hr>
                            <br/>
                            <p>&#169;	2020. All rights Reserved.</p>
                        </div>    
                    </Container>
                </div>
            </footer>
        </div>
        );
    }
}
export default footer;

