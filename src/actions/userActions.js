import {FETCH_USER_INFO, ADD_NEW_USER, DELETE_USER} from './types';
import axios from 'axios';

export const getUserInfo = () => dispatch => {
    axios.get("http://localhost:8080/allusers")
    .then(res => res)
    .then(userData => dispatch({
        type: FETCH_USER_INFO,
        payload: userData.data
    }));
}