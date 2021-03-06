import React from 'react'
import { Link } from 'react-router-dom'
import './ShowTraining.scss'

export default function ShowTraining(props) {
  const { trainings, currentUser, history } = props;
  return (
    <div className="training-body">
      <h1 className="history-title">Training History</h1>
      <div className="training-container">
        <Link to="/new/training/"><button className="training-button">Add Training</button></Link> 
        <div className="training-container-inner-top">
          <select className="date-select">
            <option value="Past 7 Days">Past 7 Days</option>
            <option value="Past 30 Days">Past 30 Days</option>
            <option value="Past 365 Days">Past 365 Days</option>
            <option value="All Time Stats">All Time Stats</option>
          </select>
          <section className="training-container-inner-bottom">
      {
        trainings.map(training => (
          <React.Fragment key={training.created_at}>
            <div className='training-card'>
              <h1 className="date">{`${training.created_at.slice(5,10)}-${training.created_at.slice(0,4)}`}</h1>
              <p className="info">Rolls: {training.rolls}</p>
              <p className="info">Opponents: {training.opponents}</p>
              <p className="info">Subs: {training.subs}</p>
              <p className="info">Taps: {training.taps}</p>
            </div>
          </React.Fragment>
        ))}
            </section>
          </div>
        </div>
      </div>
  )
}
