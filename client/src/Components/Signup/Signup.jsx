import React, { Component } from 'react'
import './Signup.scss'
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
        <div className="signup-body">
          <div className="signup-container">
          <h2 className="signup-header">Get Started</h2>
            <form className="signup-form" onSubmit={(e) => {
              e.preventDefault();
              handleSignupSubmit(this.state);
              history.push('/home');
              this.setState({
                name: "",
                email: "",
                password: ""
              })
            }}>
              <input
                className='signup-input'
                placeholder='name'
                type='text'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
              <input
                className='signup-input'
                placeholder="email"
                type='text'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              <input
                className='signup-input'
                placeholder="password"
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              <button className="signup-button">Sign Up</button>
              <Link className="login-link" to='/login'><p>Need to Log In?</p></Link>
            </form>
          </div>
        </div>
    )
  }
}
