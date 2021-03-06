import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import Login from '../Login/Login'
import Signup from '../Signup/Signup';
import Hero from '../Hero/Hero'
import ShowOneTech from '../ShowOneTech/ShowOneTech'
import ShowAllTechs from '../ShowAllTechs/ShowAllTechs'
import CreateTech from '../CreateTech/CreateTech'
import UpdateTech from '../UpdateTech/UpdateTech'
import ShowTraining from '../ShowTraining/ShowTraining'
import UpdateTraining from '../UpdateTraining/UpdateTraining'
import CreateTraining from '../CreateTraining/CreateTraining'
import { getAllTechs, getOneTech, createTech, updateTech, deleteTech } from '../../Services/techniques'
import { getAllTrainings, createTraining, updateTraining, deleteTraining } from '../../Services/trainings'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'


class Main extends Component {

  state = {
    techniques: [],
    trainings: []
  }

  // componentDidMount() {
  //   if (this.props.currentUser) {
  //     this.getTechs();
  //     this.getTrainings();
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      if (!this.props.currentUser) {
        this.props.history.push('/')
      } else {
          this.getTechs();
          this.getTrainings();
      }
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
      techniques: prevState.techniques.map(technique => technique.id === id ? updatedTechnique : technique)
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
    const trainings = await getAllTrainings(this.props.currentUser.id);
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
        <Route path='/' render={() => (
          !this.props.currentUser ? <Hero />
            : ''
        )} />
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
          !this.props.currentUser ?
            '':
            <Home
            trainings={this.state.trainings}
            currentUser={this.props.currentUser}
            />
        )}
        />
        <Route path='/techniques' render={() => (
          <ShowAllTechs
            techniques={this.state.techniques}
            currentUser={this.props.currentUser}
            destroyTechnique={this.destroyTechnique}
          />
        )} />
        <Route path='/technique/:name' render={(props) => {
          const techName = props.match.params.name
          return <ShowOneTech
            techName={techName}
            currentUser={this.props.currentUser}
            destroyTechnique={this.destroyTechnique}
            putTech={this.putTech}
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
        <Route path='/new/training' render={(props) => (
          <CreateTraining
            {...props}
            postTraining={this.postTraining}
          />
          )} />
        <Route path='/new/technique' render={(props) => (
          <CreateTech
            {...props}
            postTech={this.postTech}
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

export default withRouter(Main)