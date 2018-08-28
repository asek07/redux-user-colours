import {FETCH_USER_INFO, ADD_NEW_USER, DELETE_USER} from './types';
import axios from 'axios';

export const getUserInfo = () => dispatch => {
    console.log("get user info");
    axios.get("http://localhost:8080/allusers")
    .then(res => res)
    .then(userData => dispatch({
        type: FETCH_USER_INFO,
        payload: userData.data
    }));
}

export const addUser = (user) => dispatch  => {
    axios.post('http://localhost:8080/users/addUser?name=' + user.name + '&fave_colour=' + user.fave_colour)
    .then(res => res)
    .then(user => dispatch({
        type: ADD_NEW_USER,
        payload: user
    }));
}

export const deleteUser = (userID) => dispatch => {
    axios.post('http://localhost:8080/user/delete/'+userID)
    .then(res => res)
    .then(user => dispatch({
        type: DELETE_USER,
        payload: user
    }))
}