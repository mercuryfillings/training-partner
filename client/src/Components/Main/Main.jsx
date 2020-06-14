import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import ShowOneTech from '../ShowOneTech/ShowOneTech'
import ShowAllTechs from '../ShowAllTechs/ShowAllTechs'
import CreateTech from '../CreateTech/CreateTech'
import UpdateTech from '../UpdateTech/UpdateTech'
import ShowTraining from '../ShowTraining/ShowTraining'
import UpdateTraining from '../UpdateTraining/UpdateTraining'
import CreateTraining from '../CreateTraining/CreateTraining'
import { getAllTechs, getOneTech, createTech, updateTech, deleteTech } from '../../Services/techniques'
import { getAllTrainings, getOneTraining, createTraining, updateTraining, deleteTraining } from '../../Services/trainings'
import Home from '../Home/Home'


export default class Main extends Component {

  state = {
    techniques: [],
    trainings: []
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.getTechs();
      this.getTrainings();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getTechs();
      this.getTrainings();
    }
  }

  // ============================
  // ======= Techniques =========
  // ============================

  getTechs = async () => {
    const techniques = await getAllTechs(this.props.currentUser.id);
    this.setState({ techniques });
  }

  getSingleTech = async () => {
    const technique = await getOneTech(this.props.currentUser.id, this.state.techniques.name);
    this.setState({ technique })
  }

  postTech = async (techData) => {
    const newTechnique = await createTech(techData);
    this.setState(prevState => ({
      techniques: [...prevState.techniques, newTechnique]
    }))
  }

  putTech = async (id, techData) => {
    const updatedTechnique = await updateTech(id, techData);
    this.setState(prevState => ({
      techniques: prevState.techniquess.map(technique => technique.id === id ? updatedTechnique : technique)
    }))
  }

  destroyTechnique = async (id) => {
    await deleteTech(id);
    this.setState(prevState => ({
      techniques: prevState.techniques.filter(technique => technique.id !== id)
    }))
  }

  // ============================
  // === Training Sessions ======
  // ============================

  getTrainings = async () => {
    const trainings = await getAllTrainings();
    this.setState({ trainings });
  }

  postTraining = async (trainingData) => {
    const newTraining = await createTraining(trainingData);
    this.setState(prevState => ({
      trainings: [...prevState.trainings, newTraining]
    }))
  }

  putTraining = async (id, trainingData) => {
    const updatedTraining = await updateTraining(id, trainingData);
    this.setState(prevState => ({
      trainings: prevState.trainings.map(training => training.id === id ? updatedTraining : training)
    }))
  }

  destroyTraining = async (id) => {
    await deleteTraining(id);
    this.setState(prevState => ({
      trainings: prevState.trainings.filter(training => training.id !== id)
    }))
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
        <Route path='/home' render={() => (
          <Home />
        )}
        />
        <Route path='/techniques' render={() => (
          <ShowAllTechs
            techniques={this.state.techniques}
            currentUser={this.props.currentUser}
            destroyTechnique={this.destroyTechnique}
          />
        )} />
        <Route path='/technique/:id' render={(props) => {
          const techId = props.match.params.id;
          return <ShowOneTech
            techId={techId}
            currentUser={this.props.currentUser}
          />
        }} />
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

      </main>
    )
  }
}
