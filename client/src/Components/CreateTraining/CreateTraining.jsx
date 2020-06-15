import React, { Component } from 'react'

export default class CreateTraining extends Component {

  state = {
    rolls: '',
    opponents: '',
    subs: '',
    taps: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { rolls, opponents, subs, taps } = this.state
    const { postTraining, history } = this.props
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        postTraining(this.state);
        history.push('/trainings');
        this.setState({
          rolls: "",
          opponents: "",
          subs: "",
          taps: ""
        })
      }}>
        <h3>Add a Training Session</h3>
        <input
          id="id"
          type="text"
          placeholder="Number of Rolls"
          name="rolls"
          value={rolls}
          onChange={this.handleChange}
        />
        <input
          id="id"
          type="text"
          placeholder="Number of Opponents"
          name="opponents"
          value={opponents}
          onChange={this.handleChange}
        />
        <input
          id="id"
          type="text"
          placeholder="Number of Subs"
          name="subs"
          value={subs}
          onChange={this.handleChange}
        />
        <input
          id="id"
          type="text"
          placeholder="Number of Taps"
          name="taps"
          value={taps}
          onChange={this.handleChange}
        />
        
        <button>Submit</button>
      </form>
    )
  }
}

