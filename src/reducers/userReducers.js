import {FETCH_USER_INFO, ADD_NEW_USER, DELETE_USER} from '../actions/types'

const initialState = {
    users: [],
    user: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_INFO:
            console.log("reducer for fetch user info");
            return {
                ...state,
                users: action.payload
            }
        case ADD_NEW_USER:
            console.log("reducer to ADD NEW USER")
            return {
                ...state,
                user: action.payload
            }
        case DELETE_USER:
            console.log("delete reducer");
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.user_id)
            }
        default:
            console.log("hitting her")
            return state;
    }
}