import React, { Component } from 'react'

export default class CreateTech extends Component {
  state = {
    name: "",
    category: "",
    position: "",
    orientation: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { name, category, position, orientation } = this.state
    const { postTechnique, history } = this.props
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        postTechnique(this.state);
        history.push('/techniques');
        this.setState({
          name: ""
        })
      }}>
        <h3>Add New Technique</h3>
        <label htmlFor="name">Name:</label>
        <input
          id="id"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="category">Category:</label>
        <select>
          <option value="Submission">Submission</option>
          <option value="Sweep">Sweep</option>
          <option value="Guard Pass">Guard Pass</option>
          <option value="Escape">Escape</option>
        </select>
          <label htmlFor="position">Position:</label>
          <select>
            <option value="Guard">Guard</option>
            <option value="Mount">Mount</option>
            <option value="Turtle">Turtle</option>
            <option value="Knee on Belly">Knee on Belly</option>
            <option value="Side Control">Side Control</option>
            <option value="Back">Back</option>
        </select>
          <label htmlFor="orientation">Orientation:</label>
          <select>
            <option value="Bottom">Bottom</option>
            <option value="Top">Top</option>
        </select>
        <button>Submit</button>
      </form>
    )
  }
}
