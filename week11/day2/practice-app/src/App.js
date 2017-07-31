import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    getDefaultProps () {
        return {
            name: 'React'
        }
    }
    render () {
        var name = this.props.name;
        return (
            <h1>Hello {name}!</h1>
        )
    }
}

export default App;