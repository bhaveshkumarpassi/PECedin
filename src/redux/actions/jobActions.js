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
            let JOBS = [];
            jobs.forEach((job)=>{
                console.log(job.data())
                JOBS.push({...job.data(), jobID : job.id})
            })
            
            dispatch({type : actionTypes.LOAD_JOBS, JOBS : JOBS})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const fetchJob = (id)=>{
    return dispatch =>{
        firestore.collection("jobs").doc(id).get()
        .then((doc)=>{
            if(doc.exists){
                console.log(doc.data())
                dispatch({type : actionTypes.LOAD_CHOSEN_JOB, job : {...doc.data(), jobID : id}})
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const addQuery = (jobID, person, queryText)=>{
    return dispatch =>{
        firestore.collection("queries").add({
            jobID : jobID,
            person : person,
            queryText : queryText
        }).then((res)=>{
            console.log(res.id)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const fetchQueries = (jobID)=>{
    return dispatch =>{
        firestore.collection("queries").where("jobID" , "==", jobID).get()
        .then((queries)=>{
            let querie = [];
            queries.forEach((query)=>{
                console.log(query.data())
                querie.push({...query.data(), queryID : query.id});
            })
            dispatch({type : actionTypes.LOAD_QUERIES, queries : querie})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const markJob = (jobID, sid,status)=>{
    return dispatch =>{
        firestore.collection("saved").add({
            jobID : jobID,
            sid : sid,
            status : status
        }).then((res)=>{
            console.log(res.id)
            alert("Job marked " + status)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const fetchMarkedJobs = (sid, status)=>{
    return dispatch => {
        firestore.collection("saved").where("sid", "==", sid).where("status", "==", status).get()
        .then((marks)=>{
            let JOBS = [];
            marks.forEach((mark)=>{

                // firestore.collection("jobs").doc(mark.data().jobID).get()
                // .then((job)=>{
                //     JOBS.push({...job.data(), jobID : job.id})
                //     console.log({...job.data(), jobID : job.id})
                // })
                JOBS.push(mark.data().jobID)
            })
            dispatch({type : actionTypes.LOAD_STATUS_JOBS, JOBS : JOBS})
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}




