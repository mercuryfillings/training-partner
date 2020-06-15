import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowAllTechs(props) {
  const { techniques, currentUser, destroyTechnique, history } = props;

  //this is ugly and not DRY, but it works
  //Nevermind, not updating!!

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
    <>
      <Link to='/new/technique'><button>Add New Technique</button></Link>
      <br />
      <h3>Your Techniques</h3>
      <h4>Sweeps</h4>
      {
        categorizedTechs.sweep.map(sweep => (
          <React.Fragment key={sweep}>
            <Link to={`/technique/${sweep}`}>{sweep}</Link>
            <br />
          </React.Fragment>
        ))}
      <br />
      <h4>Submissions</h4>
      {
        categorizedTechs.submission.map(submission => (
          <React.Fragment key={submission}>
            <Link to={`/technique/${submission}`}>{submission}</Link>
            <br />
          </React.Fragment>
        ))}
      <br />
      <h4>Guard Passes</h4>
      {
        categorizedTechs.pass.map(pass => (
          <React.Fragment key={pass}>
            <Link to={`/technique/${pass}`}>{pass}</Link>
            <br />
          </React.Fragment>
        ))}
      <br />
      <h4>Escapes</h4>
      {
        categorizedTechs.escape.map(escape => (
          <React.Fragment key={escape}>
            <Link to={`/technique/${escape}`}>{escape}</Link>
            <br />
          </React.Fragment>
        ))}
    </>
  )
}
