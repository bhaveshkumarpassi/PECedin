import * as actionTypes from "../actions/actionTypes";

const initialState = {
    companyName : "",
    profile : "Finance",
    description : "",
    jobType : "",
    ctc : "",
    cgpa : 0,
    branches : [],
    timeline : [],
    showAlert : false,
    JOBS : null
}

export const JobReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.JOB_ADDED :
            return {...state, showAlert : true}
        case actionTypes.HIDE_ALERT :
            return {...state, showAlert : false}
        default : return state;
    }
}
