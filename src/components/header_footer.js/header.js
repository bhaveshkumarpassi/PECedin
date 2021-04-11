import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image, Navbar,Nav, NavDropdown} from 'react-bootstrap';
import { auth } from '../../firebase/firebase';
import Logo from '../../images/Logo_1.png';
import {AiFillHome} from 'react-icons/ai';
import './header_footer.css';


class header extends Component {

    constructor(props){
        super(props);

        this.state={
            isAuthenticated: false,
            user: null,
        }
    }

    componentDidMount(){
        this.unsubscribe =  auth.onAuthStateChanged(user => {
    
            if(user) {
              this.setState({
                isAuthenticated: true,
                user: user
              })
            }
            else {
              this.setState({
                isAuthenticated: false,
              })
            }
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render() {
        return (
            <div className="header__section">
            <header className = "header">
                <Navbar collapseOnSelect expand="lg"  className="page__Navigation nav--sticky">
                <Navbar.Brand href="/">
                        <Image src={Logo} className="d-inline-block align-top" id ="CompanyImage" alt="company_logo"/>
                </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto LeftNav">
                            <Link to="/Home" className="navbar-link mr-4" style={{ textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span className="fa fa-home fa-lg mr-2"></span>HOME</span></Link>
                            <Link to="/Job" className="navbar-link mr-4" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span class="fa fa-check fa-lg mr-2"></span>APPLIED JOBS</span></Link>
                            <Link to="/user" className="navbar-link mr-4" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span class="fa fa-bookmark fa-lg mr-2"></span>INTERESTED JOBS</span></Link>
                            <Link to="/register" className="navbar-link mr-4" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span className="fa fa-plus-circle fa-lg mr-2"></span>ADD JOB</span></Link>
                            <Link to="/login" className="navbar-link mr-4" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span class="fa fa-info-circle fa-lg mr-2"></span>ABOUT US</span></Link>
                            
                            <NavDropdown.Divider />
                        </Nav>

                        <Nav className="ml-auto RightNav">
                            {/* if user is logged in then we willshow only this */}
                            {!this.state.isAuthenticated ?
                                <Link to="/login" className="navbar-link mr-4" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span class="fa fa-sign-in fa-lg mr-2"></span>LOGIN</span></Link>
                                :
                                <Link to="/login" className="navbar-link mr-4" style={{textDecoration: 'none', fontWeight: "bold"}}><span className="NavBarLink"><span class="fa fa-sign-out fa-lg mr-2"></span>LOGOUT</span></Link>
                            }
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