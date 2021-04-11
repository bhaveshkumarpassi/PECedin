import React , {useState, useEffect, Component} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink, Modal} from "reactstrap";
import classnames from 'classnames';
import "./userProfile.css";
import { connect } from 'react-redux';
import {fetchUsers} from '../../redux/actions/users';
import Loading from '../loading';
import { auth } from '../../firebase/firebase';
import resume from "../../assets/sampleResume.pdf";
import UserInfo from "./userInfo";
import {FaRegEdit} from "react-icons/fa";
import ProfileEdit from "./ProfileEdit";
import profileBG from "../../assets/profileBG.jpg";


const  mapStateToProps = (state) => {
  return{
      users: state.users
  };
}

const mapDispatchToProps = dispatch => {
    
  return {
      fetchUsers: () => dispatch(fetchUsers()),
  };
}

class UserProfile extends Component{
  constructor(props){
    super(props);

    this.state={
      activeTab : '1',
      modal: false,
      user: {},
      isAuthenticated: false
    }
  }

  componentDidMount = async () =>
  {
    await this.props.fetchUsers();

    this.unsubscribe =  auth.onAuthStateChanged(user => {
    
      if(user) {

      var User = this.props.users.users.filter(usr => usr.uid === user.uid)[0];

        this.setState({
          isAuthenticated: true,
          user: User
        })
        console.log(this.state.user);
      }
      else {
        this.setState({
          isAuthenticated: false,
        })
      }
  });
  
  }

  componentWillUnmount()
  {
    this.unsubscribe();
  }

  toggleModal()
  {
    this.setState({
      modal: !this.state.modal
    })
  }

  render()
  {
    if(this.props.users.isLoading){
      return(
        <Loading type="spokes" color="#577399" />
      );
    }
    else if(this.props.users.errMess){
      return(
        <h4>{this.props.users.errMess}</h4>
      );
    }
    return(
      <div style={{
        // backgroundColor : "red",
        backgroundImage : `url(${profileBG})`,
        padding : "5% 10% 5% 10%",
        height: "100%",
        backgroundSize : "cover"
    }}><div className="userProfileDiv">
        <Nav tabs>
        <NavItem><NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => this.setState({
              activeTab: '1'
            })}>
            User Info
          </NavLink></NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => this.setState({
              activeTab: '2'
            })}
            >

            Uploaded Resume
          </NavLink></NavItem>
          
      </Nav>

      <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId="1">
        <UserInfo data={this.state.user} />
      </TabPane>
      <TabPane tabId="2">
      <center><object type="application/pdf" data={this.state.user.resume} className="userResume" >User Resume</object></center>
      </TabPane>
      </TabContent>
      <div className="EditButton" onClick={this.toggleModal}><FaRegEdit size="40px"/></div>
      <Modal isOpen={this.state.modal} toggle={this.toggleModal}><ProfileEdit/></Modal>
    </div></div>
    );
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);