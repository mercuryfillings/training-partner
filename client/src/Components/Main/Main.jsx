import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import { getAllTechs, getOneTech, createTech } from '../../Services/techniques'
import { getAllTrainings, getOneTraining, createTraining } from '../../Services/trainings'
import Home from '../Home/Home'


export default class Main extends Component {

  state = {
    techniques: [],
    trainings: []
  }

  // componentDidMount() {
  //   this.getTechs();
  //   this.getTrainings();
  // }

  // ============================
  // ======= Techniques =========
  // ============================

  getTechs = async () => {
    const techniques = await getAllTechs();
    this.setState({ techniques });
  }

  // ============================
  // === Training Sessions ======
  // ============================

  getTrainings = async () => {
    const trainings = await getAllTrainings();
    this.setState({ trainings });
  }

  render() {
    return (
      <main>
        <Route path='/login' render={(props) => (
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
        <Route path='/techniques' render={() => (
          <ShowAllTechs />
        )} />
        <Route exact path='/trainings' render={(props) => (
          <ShowTraining
            {...props}
            trainings={this.state.trainings}
            currentUser={this.props.currentUser}
            destroyTraining={this.destroyTraining}
          />
        )} />
        <Route path='/new/technique' render={(props) => (
          <CreateTech
            {...props}
            postTechnique={this.postTechnique}
          />
        )} />
        <Route path='/technique/:id/edit' render={(props) => {
          const techId = props.match.params.id;
          const technique = this.state.techniques.find(technique => technique.id === parseInt(techId));
          return <UpdateTech
            {...props}
            technique={technique}
            putTechnique={this.putTechnique}
          />
        }} />
        <Route path='/technique/:id' render={(props) => {
          const techId = props.match.params.id;
          return <ShowOneTech
            techId={techId}
            currentUser={this.props.currentUser}
          />
        }} />
      </main>
    )
  }
}
