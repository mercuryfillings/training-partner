import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

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
          <select className="select-menu">
            <option className="options">All-Time Stats</option>
            <option className="options">Past 7 Days</option>
            <option className="options">Past 30 Days</option>
            <option className="options">Past 365 Days</option>
          </select>
          <div className="data">
            <h2 className="item-a">Subs</h2>
            <div className="circle">
              <h3 className="item-c">{totals.subs}</h3>
            </div>
            <h2 className="item-b">Taps</h2>
            <div className="circle">
              <h3 className="item-d">{totals.taps}</h3>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Link to="/new/training"><button className="button">Track Training</button></Link>
          <Link to="/trainings"><button className="button">Training History</button></Link>
          <Link to="/techniques"><button className="button">Your Techniques</button></Link>
        </div>
        <div className="tech-container">
          <p className="title">Recent Techniques</p>
          <ul className="list">
            <p className="title">Submissions</p>
            <li>Armbar</li>
            <li>Omoplata</li>
            <li>Clock Choke</li>
            <li>Collar Choke</li>
          </ul>
          <ul className="list">
            <p className="title">Guard Passes</p>
            <li>Toreando</li>
            <li>Wrecking Ball</li>
            <li>Knee Cut</li>
            <li>Leg Drag</li>
          </ul>
          <ul className="list">
            <p className="title">Sweeps</p>
            <li>Pendulum Sweep</li>
            <li>Hip Bump</li>
            <li>Lumberjack</li>
            <li>Sickle</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
