import React, { Component } from 'react'
import './CreateTech.scss'

export default class CreateTech extends Component {
  state = {
    name: "",
    category: "",
    position: "",
    orientation: "",
    times_executed: 1
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name } = this.state
    const { postTech, history } = this.props
    return (
      <form className="tech-form" onSubmit={(e) => {
        e.preventDefault();
        postTech(this.state);
        history.push('/techniques');
        this.setState({
          name: ""
        })
      }}>
        <h1 className="add">Add Technique</h1>
        <div className="add-page-container">
          <div className="add-items-container">
          <input
            id="id"
            className="tech-input"
            type="text"
            name="name"
            placeholder="Technique Name"
            value={name}
            onChange={this.handleChange}
          />
          <select className="tech-select" name="category" defaultValue={'DEFAULT'} onChange={this.handleChange}>
            <option value="DEFAULT" disabled>Category</option>
            <option value="Submission">Submission</option>
            <option value="Sweep">Sweep</option>
            <option value="Pass">Guard Pass</option>
            <option value="Escape">Escape</option>
          </select>
          <select className="tech-select" name="position" defaultValue={'DEFAULT'} onChange={this.handleChange}>
            <option value="DEFAULT" disabled>Position</option>
            <option value="Guard">Guard</option>
            <option value="Mount">Mount</option>
            <option value="Turtle">Turtle</option>
            <option value="Knee on Belly">Knee on Belly</option>
            <option value="Side Control">Side Control</option>
            <option value="Back">Back</option>
          </select>
          <select className="tech-select" name="orientation" defaultValue={'DEFAULT'} onChange={this.handleChange}>
            <option value="DEFAULT" disabled>Your Orientation</option>
            <option value="Bottom">Bottom</option>
            <option value="Top">Top</option>
          </select>
          </div>
          <button className="save-tech">Save</button>
        </div>
      </form>
    )
  }
}
