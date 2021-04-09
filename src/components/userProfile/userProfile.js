import React , {useState} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink, Modal} from "reactstrap";
import classnames from 'classnames';
import "./userProfile.css";

import resume from "../../assets/sampleResume.pdf";
import UserInfo from "./userInfo";
import {FaRegEdit} from "react-icons/fa";
import ProfileEdit from "./ProfileEdit";
import profileBG from "../../assets/profileBG.jpg";

const UserProfile = ()=>{

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {if(activeTab !== tab) setActiveTab(tab);}

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    return <div style={{
        // backgroundColor : "red",
        backgroundImage : `url(${profileBG})`,
        padding : "5% 10% 5% 10%",
        height: "100%",
        backgroundSize : "cover"
    }}><div className="userProfileDiv">
        <Nav tabs>
        <NavItem><NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            User Info
          </NavLink></NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
            Uploaded Resume
          </NavLink></NavItem>
          
      </Nav>

      <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <UserInfo/>
      </TabPane>
      <TabPane tabId="2">
      <center><object type="application/pdf" data={resume} className="userResume" >User Resume</object></center>
      </TabPane>
      </TabContent>
      <div className="EditButton" onClick={toggleModal}><FaRegEdit size="40px"/></div>
      <Modal isOpen={modal} toggle={toggleModal}><ProfileEdit/></Modal>
    </div></div>
}



export default UserProfile;