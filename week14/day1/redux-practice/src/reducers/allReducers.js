/**
 * Created by cw on 2017-06-26.
 */
import {combineReducers} from 'redux';
import userReducer from './reducer-user'
import activeUserReducer from './reduce-active-user';

const allReducers = combineReducers({
  users: userReducer,
  activeUser: activeUserReducer
});

export default allReducers;