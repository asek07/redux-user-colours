import React, { Component } from 'react';



class UserRow extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <tr key={this.props.userID}>
               <td className="text-left">{this.props.name}</td> 
               <td className="text-left">{this.props.faveColour}</td> 
               <td><button className="btn btn-danger padding-10 width-full" onClick={this.props.delete.bind(this)}>Delete</button></td>
            </tr>
        );
    }
}

export default UserRow;