import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import { getAllTechs, getOneTech, createTech } from '../../Services/techniques'
import { getAllTrainings, getOneTraining, createTraining } from '../../Services/techniques'
import Home from '../Home/Home'


export default class Main extends Component {

  state = {
    techniques: [],
    trainingSessions: []
  }

  componentDidMount() {
    this.getTechniques();
  }

  // ============================
  // ======= Techniques =========
  // ============================

  getAllTechniques = async () => {
    const techniques = await getAllTechs();
    this.setState({ techniques });
  }

  // ============================
  // === Training Sessions ======
  // ============================

  getAllTrainings = async () => {
    const trainings = await getAllTrainings();
    this.setState({ trainings });
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
        <Route path='/signup' render={(props) => (
          <Signup
            {...props}
            handleSignupSubmit={this.props.handleSignupSubmit}
          />
        )} />
      </main>
    )
  }
}
