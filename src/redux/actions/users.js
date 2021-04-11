import * as ActionTypes from './actionTypes';
import { auth, firestore, fireauth, firebasestore , storage} from '../../firebase/firebase';

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

