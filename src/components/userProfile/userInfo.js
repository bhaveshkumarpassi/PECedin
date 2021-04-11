import React from "react";
import {SampleUser} from "./sampleUser";
import {Row, Col, Card, CardBody, CardTitle, CardFooter} from "reactstrap";
import {VscActivateBreakpoints} from "react-icons/vsc";
import Loading from '../loading';
import user from "../../assets/user.png";

const UserInfo = ({data})=>{

        return <div className="userInfoDiv" >
            <Row>
            <Col lg="4"><center><img src={data.imageUrl} className="userDP"/></center></Col>
                <Col lg="8">
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> SID : </div><div className="InfoValue">{data.sid}</div></Row>
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> Name : </div><div className="InfoValue">{data.name}</div></Row>  
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> Branch : </div><div className="InfoValue">{data.branch}</div></Row>              
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> CGPA : </div><div className="InfoValue">{data.cgpa}</div></Row>
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> E-Mail : </div><div className="InfoValue">{data.email}</div></Row>
                    <Row><div className="InfoKey"><VscActivateBreakpoints size="25px"/> Job / Internship Preferences : </div></Row>
                    {
                    data.preferences ?
                    <div className="PreferenceCardsDiv"><Row>{data.preferences.map((p, index)=>{
                        return <Card key={index} className="PreferenceCards">
                            <CardBody>
                                <CardTitle>{p}</CardTitle>
                            </CardBody>
                            <CardFooter style={{
                                backgroundColor : "#577399"
                            }}></CardFooter>
                        </Card>
                    })}</Row></div>
                    :
                    <></>
                    }
                    
                </Col>
                
            </Row>
            
        </div>
}

export default UserInfo;