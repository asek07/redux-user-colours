import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';
import UserTable from './_components/UserTable';
import AddUserForm from './_components/AddUserForm';
import Header from './_components/Header';


class App extends Component {

  constructor() {
    super();
    console.log(store.getState());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
       <Header />
       <AddUserForm />
       <UserTable />


      </div>
      </Provider>
    );
  }
}

export default App;
