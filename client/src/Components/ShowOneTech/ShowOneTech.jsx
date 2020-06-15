import React, { Component } from 'react'
import { getOneTech } from '../../Services/techniques'

export default class ShowOneTech extends Component {
  state = {
    technique: null
  }

  componentDidMount() {
    this.setTech()
  }
  
  setTech = async () => {
    const { currentUser, techName } = this.props
    const technique = await getOneTech(currentUser.id, techName);
    this.setState({ technique })
    console.log(currentUser.id)
    console.log(techName)
    console.log(this.state.technique)
  }

  render() {
    const { technique } = this.state;
    return (
      <div>
        {
          technique && (
            <>
              <h1>{technique[0].name}</h1>
              <h2>Test</h2>
              
            </>
          )
        }
      </div>
    )
  }
}
