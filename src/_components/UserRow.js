import React, { Component } from 'react';
import {updateUser} from '../actions/userActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import "../App.css";

class UserRow extends Component {

    constructor(props){
        super(props);

        this.initialState = {
            userID: this.props.userID,
            name: this.props.name,
            colour: this.props.faveColour
        }
        
        this.modifyDisabled = true;

        //console.log("My init state", this.initialState);

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeColour = this.handleChangeColour.bind(this);
        this.handleModify =  this.handleModify.bind(this);
    }

    componentWillMount(){
        this.setState({
            userID: this.props.userID,
            name: this.props.name,
            colour: this.props.faveColour
        }); 

       // console.log("Loading props", this.props);
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })

        if(e.target.value === this.initialState.name) {
            this.modifyDisabled = true;
        }
        else {
            this.modifyDisabled = false;
        }
       
    }

    handleChangeColour(e) {
        this.setState({
            colour: e.target.value
        })
        if(e.target.value === this.initialState.colour) {
            this.modifyDisabled = true;
        }
        else {
            this.modifyDisabled = false;
        }
       
    }

    handleModify(userID) {

        if(JSON.stringify(this.initialState) !== JSON.stringify(this.state)){
            this.modifyDisabled = true;
            let user = {
                userID: this.state.userID,
                name: this.state.name,
                fave_colour: this.state.colour
            }

            this.initialState = this.state;

           //console.log("Update user method = ", user);

           this.props.updateUser(user);
           
           console.log("disabled button",this.modifyDisabled)
        }

    }

    render() {
        return (
            <tr key={this.props.userID}>
               <td className="text-left"><input className="userTable-input" type="text" value={this.state.name} onChange={this.handleChangeName}/></td> 
               <td className="text-left"><input className="userTable-input" type="text" value={this.state.colour} onChange={this.handleChangeColour}/></td> 
               <td><button className="btn btn-danger padding-10 width-full" onClick={this.props.delete.bind(this)}>Delete</button></td>
               <td><button className="btn btn-warning padding-10 width-full" disabled={this.modifyDisabled} onClick={() => this.handleModify(this.props.userID)}>Modify</button></td>
            </tr>
        );
    }
}

UserRow.propTypes = {
    updateUser: PropTypes.func.isRequired,

}

export default connect(null, {updateUser})(UserRow);

