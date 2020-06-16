import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CreateTraining.scss'

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
      <section className="create-training-page">
      <form
        onSubmit={(e) => {
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
        <h1 className="training-header">Add a Training Session</h1>
        <div className="create-training-body">
          <div className="create-training-inner">
            <input
              id="id"
              className="training-input"
              type="text"
              placeholder="Number of Rolls"
              name="rolls"
              value={rolls}
              onChange={this.handleChange}
            />
            <input
              id="id"
              className="training-input"
              type="text"
              placeholder="Number of Opponents"
              name="opponents"
              value={opponents}
              onChange={this.handleChange}
            />
            <input
              id="id"
              className="training-input"
              type="text"
              placeholder="Number of Subs"
              name="subs"
              value={subs}
              onChange={this.handleChange}
            />
            <input
              id="id"
              className="training-input"
              type="text"
              placeholder="Number of Taps"
              name="taps"
              value={taps}
              onChange={this.handleChange}
            />
            <Link to="/trainings"><button className="training-button">Save</button></Link>
          </div>
        </div>
        </form>
        </section>
    )
  }
}

