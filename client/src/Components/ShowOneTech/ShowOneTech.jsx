import React, { Component } from 'react'
import { getOneTech } from '../../Services/techniques'

export default class ShowOneTech extends Component {
  state = {
    technique: null
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setTech()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setTech()
    }
  }

  setTech = async () => {
    const { currentUser, techName } = this.props
    const technique = await getOneTech(currentUser.id, techName);
    this.setState({ technique })
    console.log(currentUser.id)
    console.log(techName)
    console.log(this.state.technique)
  }

  removeTechnique = async (id) => {
    this.props.destroyTechnique(id)
    this.setState(prevState => ({
      technique: prevState.technique.filter(technique => technique.id !== id)
    }))
  }

  handleChange = async (id, operator) => {
    const tech = this.state.technique.find((tech) => tech.id === id)
    let updatedTech;
    if (operator === '+') {
      updatedTech = { ...tech, times_executed: tech.times_executed + 1 }
    } else {
      updatedTech = { ...tech, times_executed: tech.times_executed - 1 }
    }
    this.props.putTech(id, updatedTech)
    this.setState(prevState => ({
      technique: prevState.technique.map(technique => technique.id === id ? updatedTech : technique)
    }))
  }

  render() {
    const { technique } = this.state;
    return (
      <>
        {
          technique && (
            <>
              <h1>{technique[0].name}</h1>
              <h2>Test</h2>
              {
                technique.map(technique => (
                  <React.Fragment key={technique.id}>
                    <p>{technique.position}</p>
                    <button onClick={() => this.removeTechnique(technique.id)}>Delete</button>
                    <br />
                    <p><span onClick={() => this.handleChange(technique.id, '-')}>-</span>{technique.times_executed}<span onClick={() => this.handleChange(technique.id, '+')}>+</span></p>
                  </React.Fragment>
                ))}
            </>
          )
        }
      </>
    )
  }
}
