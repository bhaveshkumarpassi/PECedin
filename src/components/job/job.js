import React, {Component} from 'react';
import { Card, Button, Media, FormGroup, Label, Input, CardHeader, CardFooter,
    CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardSubtitle, CardText, CardImg, ButtonGroup} from 'reactstrap';
import profile_pic from '../../images/profile_pic.png'
import Header from '../header_footer.js/header';
import Footer from '../header_footer.js/footer';
import SDE from '../../images/sde.jpg'
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

const commentsArray = [
    {_id: 0, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 1, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 2, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 3, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 4, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},
    {_id: 5, comment: "This is comment. This is comment. This is comment. This is comment.", author: "Bhavesh Kumar"},

];

const renderComments = () => {

    return(

        <ul className="list-unstyled">
              {commentsArray.length ? (
                commentsArray
                  .map((comm) => {
                    return (
                    <li>apple</li>
                    //   <li key={comm._id}>
                    //     <Media className="row mt-4">
                    //       <Media left className="mr-0 col-4 col-md-2">
                    //         <Media
                    //           object
                    //           className="ml-0 comments-profile-pic"
                    //           src={profile_pic}
                    //           alt={comm.author}
                    //         />
                    //         <br />
                    //         <p className="comments-data">
                    //           <b>{comm.author}</b> at{" "}
                    //           {"01-04-2021"}
                    //         </p>
                    //       </Media>
                    //       <Media className=" comment mr-0 col-8 col-md-10" body>
                    //         {comm.comment}
                    //       </Media>
                    //       <Media>
                    //           <Button
                    //             color="danger"
                    //             //onClick={() => deleteComment(comm._id)}
                    //           >
                    //             <span className="fa fa-trash"></span>
                    //           </Button>
                    //       </Media>
                    //     </Media>
                    //     <hr />
                    //   </li>
                    );
                  })
              ) : (
                <p className="mt-5">
                  Currently no comments. be first one to comment!!
                </p>
              )}
            </ul>
    );
    
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
                        <Button className='mt-3' color='danger'><span className='fa fa-lg fa-pencil-square mr-2 ml-2' />APPLY</Button>
                        <Button className='mt-3' color='success'><span className='fa fa-lg fa-bookmark mr-2 ml-2' />SAVE</Button>
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

    renderabc = () => {
        return(
            <h5>apple</h5>
        );
    }

    render(){
        return(
                <div className="jobs mt-5" style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="row   mt-4" >
                        <div className='col-md-8'>
                            {this.RenderJobDetail(data[0])}
                            {this.renderabc}
                        </div>
                        <div className='queryMain col-md-4'>
                            <h4 style={{textAlign: 'center', color: 'white', backgroundColor: '#577399'}}>JOB QUERIES</h4>
                        </div>
                    </div>
                </div>
        );
    }
}

export default JobDetail;