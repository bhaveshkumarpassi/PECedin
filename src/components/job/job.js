import React, {Component} from 'react';
import { Card, Button, Media, FormGroup, Label, Input, CardHeader, CardFooter, Jumbotron,
    CardBody, CardSubtitle, CardText, ButtonGroup} from 'reactstrap';
import profile_pic from '../../images/profile_pic.png';
import { LocalForm, Control, Errors } from "react-redux-form";
// import Header from '../header_footer.js/header';
// import Footer from '../header_footer.js/footer';
// import SDE from '../../images/sde.jpg'
import './job.css'

const data = [
    {id: 0, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 1, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 2, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 3, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 4, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 5, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 6, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 7, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},

]

const comments = [
    {_id: 0, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 1, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 2, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 3, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 4, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 5, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},

];

const RenderComments = () => {

    return(

        <div style={{marginLeft: '3%', marginRight: '3%'}}>
            <LocalForm >
                <div className="row form-group">
                    <Label htmlFor="comment" className="col-12">
                    <span className="fa fa-lg  fa-pencil-square-o ml-1 mr-2"></span>
                        Post Query
                    </Label>
                    <div className="col-12">
                    <Control.textarea
                        model=".comment"
                        name="comment"
                        className="form-control"
                        id="comment"
                        rows="3"
                        placeholder={"Type your query here ...."}
                    />
                    <Errors
                        className="text-danger"
                        show="touched"
                        model=".comment"
                        messages={{
                        required: "Required",
                        maxLength: "Must be 500 characters or less",
                        }}
                    />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-12">
                    <Button type="submit" style={{backgroundColor: '#FE5F55'}}>
                        Submit
                    </Button>
                    </div>
                </div>
            </LocalForm>
            <ul className="ml-2 list-unstyled mr-2">
                {comments.map((comm) => {
                    return (
                        <li key={comm._id}>
                            <Media className="row mt-4">
                            <Media left className="mr-0 col-4 col-md-3">
                                <Media
                                object
                                className="comments-profile-pic ml-0 "
                                src={profile_pic}
                                alt={comm.author}
                                />
                                <br />
                                <p className='comments-data'>
                                    <b>{comm.author}</b><br/>
                                    at {"01-04-2021"}
                                </p>
                            </Media>
                            <Media className="comment mr-0 col-8 col-md-9" body>
                                {comm.comment}
                            </Media>
                            <Media>
                                <Button
                                    color="danger"
                                    style={{backgroundColor: '#ec524b'}}
                                    //onClick={() => deleteComment(comm._id)}
                                >
                                    <span className="fa fa-trash"></span>
                                </Button>
                            </Media>
                            </Media>
                            <hr />
                        </li>
                    )})}    
            </ul>
        </div>
    )
}

class JobDetail extends Component {

    constructor(props){
        super(props);
    }

    RenderJobDetail = (job)=>{

        return ( 
    
            <Card className='job'>
            <CardHeader style={{backgroundColor: '#577399'}}>
                    <h4 style={{color: 'whitesmoke'}}>
                        JOB DESCRIPTION
                    </h4>
            </CardHeader>
            <CardBody>
                <CardText className='text-muted mb-5 mt-1'>
                    <cite>
                        {job.description}
                    </cite>
                </CardText>
                <CardSubtitle tag="h6" className="mb-2 mt-2 text-muted">
                    <span className='fa fa-building fa-lg mr-3 company-icon'/> 
                    <b className='ml-1'>COMPANY --  </b>
                    {job.company_name}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-id-card mt-3 mr-2 fa-lg profile-icon'/>
                    <b className='ml-1'>PROFILE --  </b>    
                    {job.Profile}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-bars mt-3 mr-2 fa-lg profile-icon'/>
                    <b className='ml-1'>CATEGORY --  </b>    
                    {job.category}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-money mr-3 mt-3 fa-lg money-icon'/>
                    <b className='ml-1'>CTC --  </b>        
                    {job.CTC}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-black-tie mr-3 mt-3 fa-lg company-icon'/>
                    <b className='ml-1'>BRANCHES --  </b>        
                    {job.branch.toString()}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                    <span className='fa fa-check mr-3 mt-3 fa-lg money-icon'/>
                    <b className='ml-1'>CGPA CRITERIA --  </b>        
                    {job.cgpa}
                </CardSubtitle>
                <CardSubtitle tag="h6" style={{color: '#1597bb'}} className="mb-2 mt-3">
                    10-04-2021 Coding Round
                </CardSubtitle>
                <div className='row justify-content-center'>
                    <ButtonGroup>
                        <Button className='mt-3' style={{backgroundColor: '#ec524b'}}><span className='fa fa-lg fa-pencil-square mr-2 ml-2' />APPLY</Button>
                        <Button className='mt-3' style={{backgroundColor: '#ec524b'}}><span className='fa fa-lg fa-bookmark mr-2 ml-2' />SAVE</Button>
                    </ButtonGroup>
                </div>
            </CardBody>
            <CardFooter style={{backgroundColor: '#BDD5EA'}}>
                <h6 style={{color: '#495867'}}>
                    Posted At: 01-04-2021
                </h6>
            </CardFooter>
          </Card>
        );
    }

    render(){
        return(

                <div className="jobs mt-5" style={{marginLeft: '5%', marginRight: '5%'}}>
                                                {this.renderabc}
                    <div className="row mt-4" >
                        <div className='col-md-7 mb-5'>
                            {this.RenderJobDetail(data[0])}
                        </div>
                        <div className='col-md-5'>
                            <div style={{backgroundColor: '#577399'}}>
                                <h3 style={{verticalAlign: 'center', 
                                textAlign: 'center',
                                color: 'white'
                                }}>
                                    JOB QUERIES
                                </h3>
                            </div>
                            <div className='queryMain' style={{backgroundColor: '#f0fff3'}}>
                                <RenderComments/>
                            </div>
                        </div>
                    </div>
                </div>
                
        );
    }
}

export default JobDetail;