import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addUser} from '../actions/userActions';


class AddUserForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            fave_colour: ""
        }

        //Binding functions
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleColourChange = this.handleColourChange.bind(this);
        this.addNewUser = this.addNewUser.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleColourChange(e) {
        this.setState({
            fave_colour: e.target.value
        })
    }

    addNewUser(e) {
        e.preventDefault;
        console.log("add user clicked");

        const user = {
            name: this.state.name,
            fave_colour: this.state.fave_colour
        }

        this.props.addUser(user);

    }

    render() {

        return (
            <div className="container">
               <div className="row">
                   <div className="col-lg-6 col-md-6">
                   <form>
                    <div className="form-group">
                        <h4 className="text-left">Name</h4>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                       <h4 className="text-left">Favourite Colour</h4>
                        <input type="text" className="form-control" value={this.state.fave_colour} onChange={this.handleColourChange} />
                    </div>
                    <input type="button" className="btn btn-primary" value="Add User" onClick={this.addNewUser} />
                </form>
                   </div>
               </div>
            </div>
        );
    }

}

AddUserForm.propTypes = {
    addUser: PropTypes.func.isRequired
}

export default connect(null, {addUser})(AddUserForm);