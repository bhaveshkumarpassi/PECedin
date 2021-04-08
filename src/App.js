import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/login/login";
import SignUpMain from "./components/signup/signupMain";
import Header from "./components/header_footer.js/header";
import Footer from "./components/header_footer.js/footer";
import UserProfile from "./components/userProfile/userProfile";
import Home from './components/home/home';
import JobDetail from './components/job/job';

function App() {
  return (
    <div className="App">
       <Header />
          <Switch>
            <Route path = "/login" exact component={Login}/>
            <Route path = "/signup" exact component={SignUpMain}/>
            <Route path = "/user" exact component={UserProfile}/>
            <Redirect to="/"/>
          </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
