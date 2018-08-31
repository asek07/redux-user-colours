import {FETCH_USER_INFO, ADD_NEW_USER, DELETE_USER, MODIFY_USER, CLEAN_STATE} from './types';
import {API_BASE_URL} from '../constants';
import axios from 'axios';

export const getUserInfo = () => dispatch => {
    console.log("get user info");
    axios.get(API_BASE_URL + "/allusers")
    .then(res => res)
    .then(userData => dispatch({
        type: FETCH_USER_INFO,
        payload: userData.data
    }));
}

export const addUser = (user) => dispatch  => {
    axios.post(API_BASE_URL + "/users/addUser?name=" + user.name + '&fave_colour=' + user.fave_colour)
    .then(res => res)
    .then(user => dispatch({
        type: ADD_NEW_USER,
        payload: user
    }));
}

export const deleteUser = (userID) => dispatch => {
    axios.post(API_BASE_URL + "/user/delete/" + userID)
    .then(res => res)
    .then(user => dispatch({
        type: DELETE_USER,
        payload: userID
    }))
}

export const updateUser = (user) => dispatch => {
    axios.post(API_BASE_URL + "/users/updateUser?id=" + user.userID + "&name=" + user.name + '&fave_colour=' + user.fave_colour)
    .then(res => res)
    .then(user => dispatch({
        type: MODIFY_USER,
        payload: user
    }));
}

export const cleanState = () => dispatch => {
    dispatch({
        type: CLEAN_STATE,
        payload: null
    })
}