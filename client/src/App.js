import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { loginUser, registerUser, removeToken, verifyUser } from './Services/auth'
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleLoginSubmit = async (loginData) => {
    try {
      const currentUser = await loginUser(loginData);
      this.setState({ currentUser });
    } catch (error) {
      window.alert("Incorrect username or password. Please try again.");
      console.log(error)
    }
  }

  handleSignupSubmit = async (signupData) => {
    try {
      const currentUser = await registerUser(signupData);
      this.setState({ currentUser });
    } catch (error) {
      window.alert("Username or Email address already in use. Please try another.");
      console.log(error)
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear();
    removeToken();
    window.location.reload();
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
          handleLogout={this.handleLogout}
        />
        <Footer />
      </>
    );
  }
}

export default withRouter(App)
