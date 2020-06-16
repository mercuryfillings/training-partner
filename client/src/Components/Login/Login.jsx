import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

export default class Login extends Component {
  state = {
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
    const { email, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <div className="login-page">
        <div className="hero-container">
        </div>
        <h1 className="header-copy">Improve Your Game<br />Track Your Progress</h1>
        <div className="login-body">
          <div className="login-container">
            <h2 className="login-header">Welcome Back</h2>
            <form className="login-form" onSubmit={(e) => {
              e.preventDefault();
              handleLoginSubmit(this.state);
              history.push('/');
              this.setState({
                email: "",
                password: ""
              })
            }}>
              <input
                className='login-input'
                type='text'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              <input
                className='login-input'
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              <button className='login-button'>Submit</button>
              {/* <Link to='/home'><button>Submit</button></Link> */}
            </form>
          </div>
        </div>
      </div>
    )
  }
}
