import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducers from '../reducers/index';

const initialState = {};

const middleware = [thunk];

const store = createStore(userReducers, initialState, applyMiddleware(...middleware));

export default store;