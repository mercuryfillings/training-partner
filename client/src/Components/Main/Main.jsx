import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';


export default class Main extends Component {

  state = {
    test: '',
    test2: ''
  }

  render() {
    return (
      <main>
        <Route path='/' render={(props) => (
          <Login
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />
      </main>
    )
  }
}
