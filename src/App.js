import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Login from "./components/login/login";
import SignUpMain from "./components/signup/signupMain";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/login" exact component={Login}/>
        <Route path = "/signup" exact component={SignUpMain}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
