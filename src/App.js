import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/login/login";
import SignUpMain from "./components/signup/signupMain";
import Header from "./components/header_footer.js/header";
import Footer from "./components/header_footer.js/footer";
import UserProfile from "./components/userProfile/userProfile";
import Home from './components/home/home';
import JobDetail from './components/job/job';
import Add_Job from "./components/add_job_form/add_job_form";

// const data = [
//   {id: 0, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
//   {id: 1, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
//   {id: 2, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
//   {id: 3, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
//   {id: 4, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
//   {id: 5, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
//   {id: 6, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
//   {id: 7, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},

// ]

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
          <Route path = "/Home" exact component={Home} />
          <Route path = "/Job" exact component={JobDetail} />
          <Redirect to="/Home" />
        </Switch>
        <Footer /> 
      </div>
    );
  }
  
}

export default App;
