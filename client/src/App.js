import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth'

export default class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  }

  handleSignupSubmit = async (signupData) => {
    const currentUser = await registerUser(signupData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear();
    removeToken();
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  render() {
    return (
      <>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handleSignupSubmit={this.handleSignupSubmit}
          currentUser={this.state.currentUser}
        />
        <Footer />
      </>
    );
  }
}

