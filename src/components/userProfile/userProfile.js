import React , {useState} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import classnames from 'classnames';
import "./userProfile.css";

import resume from "../../assets/sampleResume.pdf";
import UserInfo from "./userInfo";

const UserProfile = ()=>{

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {if(activeTab !== tab) setActiveTab(tab);}

    return <div className="userProfileDiv">
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
        
    </div>
}



export default UserProfile;