import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLoginSubmit(this.state);
          history.push('/');
          this.setState({
            username: "",
            password: ""
        })
      }}>
          <input
            className=''
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
          />
          <input
            className=''
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}
