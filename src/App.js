import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/login/login";
import SignUpMain from "./components/signup/signupMain";
import Header from "./components/header_footer.js/header";
import Footer from "./components/header_footer.js/footer";
import UserProfile from "./components/userProfile/userProfile";
import Home from './components/home/home';
import JobDetail from './components/job/job';
import Add_Job from "./components/add_job_form/add_job_form";
import Aboutus from "./components/aboutUs/aboutUs";

function App() {
  return (
    <div className="App">
       <Header />
      <Switch>
        <Route path = "/login" exact component={Login}/>
        <Route path = "/signup" exact component={SignUpMain}/>
        <Route path = "/user" exact component={UserProfile}/>
        <Route path ="/addJob" exact component={Add_Job} />
        <Route path = "/Home" exact component={Home} />
        <Route path = "/Home/:jobId" exact component={JobDetail} />
        <Route path="/aboutUs" exact component={Aboutus} />
        <Redirect to="/Home" />
      </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
