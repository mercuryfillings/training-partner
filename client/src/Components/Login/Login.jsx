import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLoginSubmit(this.state);
          history.push('/');
          this.setState({
            email: "",
            password: ""
        })
      }}>
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
          {/* <Link to='/home'><button>Submit</button></Link> */}
        </form>
      </div>
    )
  }
}
