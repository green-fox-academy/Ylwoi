/**
 * Created by cw on 2017-06-26.
 */
import React from 'react';
import {connect} from 'react-redux';

class UserDetail extends React.Component {

  render() {
    if (!this.props.user) {
      return (<h4>Select a user...</h4>)
    }
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <h3>Age: {this.props.user.age}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);