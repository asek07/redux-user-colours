import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getUserInfo, deleteUser} from '../actions/userActions';
import UserRow from './UserRow';
import store from '../store/store';

class UserTable extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);

    }

    componentWillMount() {
        this.props.getUserInfo();
    }

    componentWillReceiveProps(nextProps) {
        console.log("Has new user", nextProps.user);
        if(nextProps.user) {
            this.props.users.push(nextProps.user.data);
        }
    }

    handleDelete(userID) {
        console.log("Hitting delete with userID=" + userID);
        this.props.deleteUser(userID);
    }

    render() {
        console.log("HERE", this.props.users);
        console.log("PROPS", this.props);
        const userData = this.props.users.map((user) => {
            return <UserRow key={user.user_id} name={user.name} faveColour={user.fave_colour} delete={() => this.handleDelete(user.user_id)}/>
        })

        return (
            <div className="container">
            <hr/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Favourite Colour</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData}
                    </tbody>
                </table>
            </div>
        );
    }
}

UserTable.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => (
    console.log("state printing again",state),
    {
    users: state.userInfo.users,
    user: state.userInfo.user
})

export default connect(mapStateToProps, {getUserInfo, deleteUser})(UserTable);