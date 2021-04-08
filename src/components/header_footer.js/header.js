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
                            <Link to="/" className="nav-link"><span className="NavLink"><span className="fa fa-home fa-lg"></span>Home</span></Link>

                            {/* <Link to="#" className="nav-link"><span className="NavLink">Categories</span></Link> */}
                            <Link to="#" className="nav-link"><span className="NavLink"><span class="fa fa-list fa-lg"></span>Jobs Applied</span></Link>
                            <Link to="#" className="nav-link"><span className="Navlink"><span class="fa fa-address-card fa-lg"></span>Interested Jobs</span></Link>
                            <Link to="/register" className="nav-link"><span className="NavLink"><span className="fa fa-plus-circle fa-lg"></span>Add Job</span></Link>
                            <Link to="#" className="nav-link"><span className="NavLink"><span class="fa fa-info-circle fa-lg"></span>About Us</span></Link>
                            
                            <NavDropdown.Divider />
                        </Nav>

                        <Nav className="ml-auto RightNav">
                            {/* if user is logged in then we willshow only this */}
                            <button to="/register" className="nav-link" ><span className="NavLink"><span className="fa fa-sign-in fa-lg">Login</span></span></button>
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