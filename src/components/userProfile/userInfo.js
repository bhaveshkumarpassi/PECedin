import React from "react";
import {SampleUser} from "./sampleUser";
import {Row, Col} from "reactstrap";


const UserInfo = ()=>{
        return <div className="userInfoDiv" >
            <Row>
                <Col lg="7">
                    <p>SID : {SampleUser.sid}</p>
                    <p>Name : {SampleUser.name}</p>
                </Col>
                <Col lg="5"><img src={SampleUser.image} className="userDP"/></Col>
            </Row>
            
        </div>
}

export default UserInfo;