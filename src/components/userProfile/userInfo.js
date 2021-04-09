import React from "react";
import {SampleUser} from "./sampleUser";
import {Row, Col} from "reactstrap";
import {VscActivateBreakpoints} from "react-icons/vsc";

const UserInfo = ()=>{
        return <div className="userInfoDiv" >
            <Row>
                <Col lg="8">
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> SID : </div><div className="InfoValue">{SampleUser.sid}</div></Row>
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> Name : </div><div className="InfoValue">{SampleUser.name}</div></Row>  
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> Branch : </div><div className="InfoValue">{SampleUser.branch}</div></Row>              
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> CGPA : </div><div className="InfoValue">{SampleUser.cgpa}</div></Row>
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> E-Mail : </div><div className="InfoValue">{SampleUser.email}</div></Row>

                </Col>
                <Col lg="4"><img src={SampleUser.image} className="userDP"/></Col>
            </Row>
            
        </div>
}

export default UserInfo;