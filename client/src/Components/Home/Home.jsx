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

    <div className="home">
      <h1 className="welcome">Welcome Back, {name}</h1>
      <div className="home-container">
        <div className="data-container">
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <div className="data">
            <h2 className="item-a">Subs</h2>
            <div className="circle">
              <h3>{totals.subs}</h3>
            </div>
            <h2 className="item-b">Taps</h2>
            <div className="circle">
              <h3 className="item-d">{totals.taps}</h3>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="button">Track Training</button>
          <button className="button">Training History</button>
          <button className="button">Your Techniques</button>
        </div>
      </div>
    </div>
  )
}
