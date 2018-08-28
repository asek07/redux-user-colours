import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';
import UserTable from './_components/UserTable';
import AddUserForm from './_components/AddUserForm';
class App extends Component {

  constructor() {
    super();
    console.log(store.getState());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddUserForm />
       <UserTable />
      </div>
      </Provider>
    );
  }
}

export default App;
