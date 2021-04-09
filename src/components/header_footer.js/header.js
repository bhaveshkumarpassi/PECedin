import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Navbar,Nav, NavDropdown} from 'react-bootstrap';
import Logo from '../../images/Logo_1.png';
import {AiFillHome} from 'react-icons/ai';
import './header_footer.css';


class header extends Component {
    render() {
        return (
            <div className="header__section">
            <header className = "header">
                <Navbar collapseOnSelect expand="lg" className="page__Navigation nav--sticky">
                <Navbar.Brand href="/">
                        <Image src={Logo} className="d-inline-block align-top" id ="CompanyImage" alt="company_logo"/>
                </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto LeftNav">
                            <Link to="/Home" className="navbar-link" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span className="fa fa-home fa-lg mr-2"></span>HOME</span></Link>
                            <Link to="#" className="navbar-link" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span class="fa fa-check fa-lg mr-2"></span>APPLIED JOBS</span></Link>
                            <Link to="#" className="navbar-link" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span class="fa fa-bookmark fa-lg mr-2"></span>INTERESTED JOBS</span></Link>
                            <Link to="/register" className="navbar-link" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span className="fa fa-plus-circle fa-lg mr-2"></span>ADD JOB</span></Link>
                            <Link to="#" className="navbar-link" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span class="fa fa-info-circle fa-lg mr-2"></span>ABOUT US</span></Link>
                            
                            <NavDropdown.Divider />
                        </Nav>

                        <Nav className="ml-auto RightNav">
                            {/* if user is logged in then we willshow only this */}
                            <button to="/register" className="navbar-link" ><span className="NavBarLink"><span className="fa fa-sign-in fa-lg">Login</span></span></button>
                            {/* otherwise */}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
        )
    }
}
export default header