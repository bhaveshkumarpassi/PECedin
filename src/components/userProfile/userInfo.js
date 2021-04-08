import React from "react";
import {SampleUser} from "./sampleUser";
import {Row, Col} from "reactstrap";
import {FaRegEdit} from "react-icons/fa";

const UserInfo = ()=>{
        return <div className="userInfoDiv" >
            <Row>
                <Col lg="7">
                    <p>SID : {SampleUser.sid}</p>
                    <p>Name : {SampleUser.name}</p>
                </Col>
                <Col lg="5"><img src={SampleUser.image} className="userDP"/></Col>
            </Row>
            <div className="EditButton"><FaRegEdit size="40px"/></div>
        </div>
}

export default UserInfo;