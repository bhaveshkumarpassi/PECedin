const INITIAL_STATE = {
    isSignedIn:localStorage.getItem('isSignedIn')||false,
    userId:localStorage.getItem('userId'),
    err:null
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SIGN_UP':
            return{...state, isSignedIn:true, userId:action.payload.user._id, err:null}
        case 'SIGN_IN':
            return{...state, isSignedIn:true, userId:action.payload.user._id, err:null}
        case 'SIGN_OUT':
            return{...state, isSignedIn:false, userId:null, err:null}
        case 'AUTH_FAILED':
            return {...state, isSignedIn:false, userId:null, err:action.payload.error}
        default:
            return state
    }
}