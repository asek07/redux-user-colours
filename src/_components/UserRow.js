import React, { Component } from 'react';



class UserRow extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <tr key={this.props.userID}>
               <td>{this.props.name}</td> 
               <td>{this.props.faveColour}</td> 
               <td><button onClick={this.props.delete.bind(this)}>Delete</button></td>
            </tr>
        );
    }

}

export default UserRow;