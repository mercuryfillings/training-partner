import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, email, password } = this.state;
    const { handleSignupSubmit, history } = this.props;
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSignupSubmit(this.state);
          history.push('/');
          this.setState({
            name: "",
            email: "",
            password: ""
          })
        }}>
          <input
            className=''
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
          <input
            className=''
            type='text'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            className=''
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
