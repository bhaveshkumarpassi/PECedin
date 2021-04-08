import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Login from "./components/login/login";
import SignUpMain from "./components/signup/signupMain";
import Header from "./components/header_footer.js/header";
import Footer from "./components/header_footer.js/footer";
import Add_Job from "./components/add_job_form/add_job_form";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" >
        <Header />
        <Route path = "/login" exact component={Login}/>
        <Route path = "/signup" exact component={SignUpMain}/>
        <Route path="/add_job" exact component={Add_Job} />
        <Footer /> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
