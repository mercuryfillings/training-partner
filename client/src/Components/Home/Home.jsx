import React from 'react'
import './Home.scss'

export default function Home(props) {
  const { trainings, currentUser } = props;

  let totals = {
    subs: 0,
    taps: 0
  }

  let name = ''

  trainings.forEach(training => {
    totals.subs += training.subs
    totals.taps += training.taps
  })

  if (currentUser) {
    name = currentUser.name
  }

  return (
    
    <>
      <h1 className="welcome">Welcome Back, {name}</h1>
      <h2>Subs</h2>
      <h3>{totals.subs}</h3>
      <h2>Taps</h2>
      <h3>{totals.taps}</h3>
      <div className="button-container">
        <button className="button">Add a New Training Session</button>
        <button className="button">Training History</button>
        <button className="button">Your Techniques</button>
      </div>
    </>
  )
}
