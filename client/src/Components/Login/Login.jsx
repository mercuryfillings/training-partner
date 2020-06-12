import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    e.preventDefault
  }

  render() {
    return (
      <div>
        <form>
          <input
            className=''
            type='text'
            name='username'
            value={value}
            onChange={handleChange}

          />
        </form>
      </div>
    )
  }
}
