import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getUserInfo} from '../actions/userActions';
import UserRow from './UserRow';

class UserTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myUsers: []
        }
    }

    componentWillMount() {
        // this.props.getUserInfo();
        this.populateUser()
        

        // console.log(this.state.myUsers)
        // console.log(this.props.getUserInfo())
        // console.log(this.props.userInfo);
    }

    populateUser(){
        this.setState({
            myUsers: this.props.getUserInfo()
        })
        console.log(this.props.userInfo)
    }


    render() {
        
        return (
            <div>
                <p>hey</p>
            {this.state.myUsers}
            </div>
        );
    }
}

UserTable.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    userInfo: PropTypes.array.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    userInfo: state.userInfo.users,
    user: state.userInfo.user
})

export default connect(mapStateToProps, {getUserInfo})(UserTable);