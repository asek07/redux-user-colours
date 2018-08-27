import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getUserInfo} from '../actions/userActions';
import UserRow from './UserRow';

class UserTable extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
       let mydata = this.props.getUserInfo();
        
       console.log(mydata);
        console.log(this.props.getUserInfo())
        console.log("Users", this.props.users);
    }

    render() {
        
        return (
            <div>
                <p>hey</p>
            
            </div>
        );
    }
}

UserTable.propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    user: PropTypes.object
}

const mapStateToProps = state => ({
    users: state.userInfo.users,
    user: state.userInfo.user
})

export default connect(mapStateToProps, {getUserInfo})(UserTable);