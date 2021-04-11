import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/login/login";
import SignUpMain from "./components/signup/signupMain";
import Header from "./components/header_footer.js/header";
import Footer from "./components/header_footer.js/footer";
import UserProfile from "./components/userProfile/userProfile";
import Home from './components/home/home';
import JobDetail from './components/job/job';
import Candidate from './components/applied_candidates/candidates';
import Add_Job from "./components/add_job_form/add_job_form";
import Aboutus from "./components/aboutUs/aboutUs";
import Marked from "./components/home/marked";

class App extends Component {

  constructor(props){
    super(props);

  }

  render(){

    return (
      <div className="App">
         <Header />
        <Switch>
          <Route path = "/login" exact component={Login}/>
          <Route path = "/signup" exact component={SignUpMain}/>
          <Route path = "/user" exact component={UserProfile}/>
          <Route path ="/addJob" exact component={Add_Job} />
          <Route path = "/Home" exact render={()=><Home/>} />
          <Route path = "/applied" exact render={()=><Marked status="applied"/>} />
          <Route path = "/interested" exact render={()=><Marked status="interested"/>} />
          <Route path = "/Job" exact component={JobDetail} />
          <Route path = "/Applied-Candidates" exact component={Candidate} />
          <Route path = '/aboutUs' exact component={Aboutus} />
          <Redirect to="/login" />
        </Switch>
        <Footer /> 
      </div>
    );
  }
  
}

export default App;
