import React, { Component } from 'react'
import { getOneTech } from '../../Services/techniques'
import './ShowOneTech.scss'

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
      <div className="one-tech-page">
        {
          technique && (
            <body className="one-tech-body">
              <h1 className="tech-name">{technique[0].name}</h1>
              <section className="one-tech-container">
                <div className="one-tech-inner-container">
                  {
                    technique.map(technique => (
                      <React.Fragment key={technique.id}>
                        <div className="block-container">
                          <div className="text-box"></div>
                            <h2 className="position-name">{technique.position}</h2>
                            <p className="delete" onClick={() => this.removeTechnique(technique.id)}>Delete</p>
                          </div>
                        <div className="circle-container">
                          <span className="operator" onClick={() => this.handleChange(technique.id, '-')}>-</span>
                          <span className="tech-circle">{technique.times_executed}</span>
                          <span className="operator" onClick={() => this.handleChange(technique.id, '+')}>+</span>
                        </div>
                      </React.Fragment>
                      
                    ))}
                </div>
              </section>
            </body>
          )
        }

      </div>
    )
  }
}
