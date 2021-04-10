import {firestore} from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const addJob = (job)=>{
    return dispatch =>{
        firestore.collection("jobs").add(job)
        .then((res)=>{
            console.log("from redux")
            console.log(res.id)
            dispatch({type : actionTypes.JOB_ADDED})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const fetchAllJobs = ()=>{
    return dispatch =>{
        firestore.collection("jobs").get()
        .then((jobs)=>{
            jobs.forEach((job)=>{
                console.log(job.data())
                return job;
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}