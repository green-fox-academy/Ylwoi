/**
 * Created by cw on 2017-06-26.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userClick} from '../actions/user-click';

class UserList extends React.Component {

  listMaker() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id} onClick={() => this.props.userClick(user)}>{user.name}</li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.listMaker()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({userClick: userClick}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);