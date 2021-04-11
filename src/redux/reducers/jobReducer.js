
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    // companyName : "",
    // profile : "Finance",
    // description : "",
    // jobType : "",
    // ctc : "",
    // cgpa : 0,
    // branches : [],
    // timeline : [],
    job : null,
    showAlert : false,
    JOBS : null,
    queries : null,
    statusJobs : null
}

export const JobReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.JOB_ADDED :
            return {...state, showAlert : true}
        case actionTypes.HIDE_ALERT :
            return {...state, showAlert : false}
        case actionTypes.LOAD_JOBS :
            console.log(action.JOBS)
            return {...state, JOBS : action.JOBS}
        case actionTypes.LOAD_CHOSEN_JOB :
            return {...state, job : action.job}
        case actionTypes.LOAD_QUERIES :
            return {...state, queries : action.queries}
        case actionTypes.LOAD_STATUS_JOBS :
            return {...state, statusJobs : action.JOBS}
        default : return state;
    }
}

