import * as ActionTypes from './actionTypes';
import { auth, firestore, firebasestore , storage} from '../../firebase/firebase';

export const fetchUsers = () => (dispatch) => {
    dispatch(usersLoading(true));

    return firestore.collection('users').get()
        .then(snapshot => {
            let users = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const _id = doc.id
                users.push({_id, ...data });
            });
            return users;
        })
        .then(users => dispatch(addUsers(users)))
        .catch(error => dispatch(usersFailed(error.message)));
}

export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed = (errmess) => ({
    type: ActionTypes.USERS_FAILED,
    payload: errmess
});

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});



export const addUser = (user, creds) => (dispatch) => {

    if (!user) {
        alert('No user logged in!!');
        return;
    }

    user.updateProfile({
        displayName: creds.name
      }).then(function() {
        
        firestore.collection('users').add({
          uid: user.uid,
          sid: creds.sid,
          cgpa: creds.cgpa,
          branch: creds.branch,
          name: creds.name,
          imageUrl: creds.imageUrl,
          resume: creds.resume,
          email: creds.email,
          preferences: creds.preferences,
          password: creds.password,
          createdAt: firebasestore.FieldValue.serverTimestamp(),
          updatedAt: firebasestore.FieldValue.serverTimestamp()
      })
      .then(() => {
          dispatch(fetchUsers());
      })
      .catch(error => { console.log('added user', error.message);
          alert(null,error.message); })
      }).catch(function(error) {
        // An error happened.
      });
}


export const registerUser = (creds) => (dispatch) => {

    auth.createUserWithEmailAndPassword(creds.email, creds.password)
    .then(() => {
        var user = auth.currentUser;

        dispatch(addUser(user, creds));
        
        alert('Register successful', JSON.stringify(user))
    })
    .catch((error) => {

        alert('Uncessful register \n'+error.message)
    });
}

/*export const loginRequest = () => {
return {
type: ActionTypes.LOGIN_REQUEST
}
};

export const loginSuccess = (user) => {
return {
type: ActionTypes.LOGIN_SUCCESS,
user
}
};

export const loginFailure = (message) => {
return {
type: ActionTypes.LOGIN_FAILURE,
message
}
};

export const loginUser = (email, password, navigation) => (dispatch) => {

dispatch(loginRequest());

return auth.signInWithEmailAndPassword(email, password)
.then(() => {

var user = auth.currentUser;
dispatch(loginSuccess(user));
navigation.navigate('Home');
})
.catch((error) => {
Alert.alert('Login UnSuccessful!!', error.message);
dispatch(loginFailure(error.message));
});
}

export const requestLogout = () => {
return {
type: ActionTypes.LOGOUT_REQUEST
}
}

export const logoutSuccess = () => {
return {
type: ActionTypes.LOGOUT_SUCCESS
}
}

export const logoutFailure = (message) => {
return {
type: ActionTypes.LOGOUT_FAILURE,
message
}
}

// Logs the user out
export const logoutUser = (navigation) => (dispatch) => {
dispatch(requestLogout());

return auth.signOut().then(() => {
dispatch(logoutSuccess());
navigation.navigate('Home');
}).catch((error) => {
Alert.alert('Logout Unsuccessful!!', error.message);
dispatch(logoutFailure(error.message));
});

}*/