import React from 'react';
import { Link } from 'react-router-dom';
import './ShowAllTechs.scss'

export default function ShowAllTechs(props) {
  const { techniques } = props;

  let categorizedTechs = {
    sweep: [],
    submission: [],
    escape: [],
    pass: []
  }

  techniques.forEach(technique => {
    if (technique.category.toLowerCase() === 'submission') {
      categorizedTechs.submission.push(technique.name)
    } else if (technique.category.toLowerCase() === 'sweep') {
      categorizedTechs.sweep.push(technique.name)
    } else if (technique.category.toLowerCase() === 'escape') {
      categorizedTechs.escape.push(technique.name)
    } else if (technique.category.toLowerCase() === 'pass') {
      categorizedTechs.pass.push(technique.name)
    }
  })

  let uniqueSubList = categorizedTechs.submission.reduce((unique, submission) => {
    return unique.includes(submission) ? unique : [...unique, submission]
  }, [])
  categorizedTechs.submission = uniqueSubList

  let uniqueSweepList = categorizedTechs.sweep.reduce((unique, sweep) => {
    return unique.includes(sweep) ? unique : [...unique, sweep]
  }, [])
  categorizedTechs.sweep = uniqueSweepList

  let uniqueEscapeList = categorizedTechs.escape.reduce((unique, escape) => {
    return unique.includes(escape) ? unique : [...unique, escape]
  }, [])
  categorizedTechs.escape = uniqueEscapeList

  let uniquePassList = categorizedTechs.pass.reduce((unique, pass) => {
    return unique.includes(pass) ? unique : [...unique, pass]
  }, [])
  categorizedTechs.pass = uniquePassList


  return (
    <div className="tech-page">
      <h1 className="your-techs">Your Techniques</h1>
      <div className="tech-page-container">
        <Link className="column-link" to='/new/technique'><button className="add-tech">Add New Technique</button></Link>
        <br />
        <div className="tech-item-container">
          <div className="column-container">
            <h4 className="column-head">Sweeps</h4>
            {
              categorizedTechs.sweep.map(sweep => (
                <React.Fragment className="column-item" key={sweep}>
                  <Link className="column-link" to={`/technique/${sweep}`}>{sweep}</Link>
                  <br />
                </React.Fragment>
              ))}
          </div>
          <div className="column-container">
            <h4 className="column-head">Submissions</h4>
            {
              categorizedTechs.submission.map(submission => (
                <React.Fragment className="column-item" key={submission}>
                  <Link className="column-link" to={`/technique/${submission}`}>{submission}</Link>
                  <br />
                </React.Fragment>
              ))}
          </div>
          <div className="column-container">
            <h4 className="column-head">Guard Passes</h4>
            {
              categorizedTechs.pass.map(pass => (
                <React.Fragment className="column-item" key={pass}>
                  <Link className="column-link" to={`/technique/${pass}`}>{pass}</Link>
                  <br />
                </React.Fragment>
              ))}
          </div>
          <div className="column-container">
            <h4 className="column-head">Escapes</h4>
            {
              categorizedTechs.escape.map(escape => (
                <React.Fragment className="column-item" key={escape}>
                  <Link className="column-link" to={`/technique/${escape}`}>{escape}</Link>
                  <br />
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
