import React, { Component } from 'react';
import {updateUser} from '../actions/userActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserRow extends Component {

    constructor(props){
        super(props);

        const initialState = {
            name: this.props.name,
            colour: this.props.faveColour
        }

        this.state = {
            name: this.props.name,
            colour: this.props.faveColour
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeColour = this.handleChangeColour.bind(this);
        this.handleModify =  this.handleModify.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeColour(e) {
        this.setState({
            colour: e.target.value
        })
    }

    handleModify(userID) {
        if(this.initialState !== this.state){
            let user = {
                name: this.state.name,
                fave_colour: this.state.faveColour
            }

            this.props.updateUser(user);
        }
    }


    render() {
        return (
            <tr key={this.props.userID}>
               <td className="text-left"><input type="text" value={this.state.name} onChange={this.handleChangeName}/></td> 
               <td className="text-left"><input type="text" value={this.state.colour} onChange={this.handleChangeColour}/></td> 
               <td><button className="btn btn-danger padding-10 width-full" onClick={this.props.delete.bind(this)}>Delete</button></td>
               <td><button className="btn btn-warning padding-10 width-full" onClick={() => this.handleModify()}>Modify</button></td>
            </tr>
        );
    }
}

UserRow.propTypes = {
    updateUser: PropTypes.func.isRequired,

}

// const mapStateToProps = state => (
//     console.log("state printing again",state),
//     {
//     users: state.userInfo.users,
//     user: state.userInfo.user
// })

export default connect(null, {updateUser})(UserRow);

