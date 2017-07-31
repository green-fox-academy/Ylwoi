import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/allReducers';
import Main from './components/main';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>
  , document.getElementById('root'));
