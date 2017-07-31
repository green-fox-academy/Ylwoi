/**
 * Created by cw on 2017-06-26.
 */
import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

const Main = () => (
  <div>
    <h2>Username list</h2>
    <UserList/>
    <hr/>
    <h2>User details</h2>
    <UserDetail/>
  </div>
);

export default Main;