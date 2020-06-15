import React from 'react'

export default function ShowTraining(props) {
  const { trainings, currentUser, history } = props;

  return (
    <>
      <select>
        <option value="Past 7 Days">Past 7 Days</option>
        <option value="Past 30 Days">Past 30 Days</option>
        <option value="Past 365 Days">Past 365 Days</option>
        <option value="All Time Stats">All Time Stats</option>
      </select>
      {
        trainings.map(training => (
          <React.Fragment key={training.created_at}>
            <h2>{training.created_at}</h2>
            <p>Rolls: {training.rolls}</p>
            <p>Opponents: {training.opponents}</p>
            <p>Subs: {training.subs}</p>
            <p>Taps: {training.taps}</p>
            <br />
          </React.Fragment>
        ))}
    </>
  )
}
