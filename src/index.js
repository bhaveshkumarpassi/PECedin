import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";

import {JobReducer} from "./redux/reducers/jobReducer";
import {auth} from './redux/reducers/authReducer';
import {users} from './redux/reducers/userReducer'; 

const rootReducer = combineReducers({
  job : JobReducer,
  auth: auth,
  users: users
})


const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter> 
    <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
