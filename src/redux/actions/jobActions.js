import {firestore} from "../../firebase/firebase";

export const addJob = (job)=>{
    return dispatch =>{
        firestore.collection("jobs").add(job)
        .then((res)=>{
            console.log("from redux")
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}