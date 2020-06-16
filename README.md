
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**TrainingPartner** is designed to help beginners better understand their journey through the complex world of Brazillian Jiu Jitsu. Record data on your training sessions, build a library of techniques as you learn them, and track your success and  growth in this exciting sport._


<br>

## MVP

Deployed at: https://training-partner.surge.sh/signup

> _The **TrainingPartner** MVP will allow users to register a new account, record timestamped data for individual training sessions, and build a custom library of techniques. They can then review their training sessions, and increment their successful execution of individual techniques in a live sparring environment_

<br>

### Goals

- _build a useful app for the BJJ community, especially for newcomers to the sport_
- _understand rails & auth on a deeper level_
- _build my confidence in relational DBs_
- _brush up on my react class components that I've neglected in favor of sexy hooks_
- _keep my love of BJJ alive in this crazy Covid world where it's no longer safe to be strangled by 300lb kazakhstani dudes as a hobby_

<br>

### Challenges
  - _I understand auth patterns well enough, but troubleshooting will likely be difficult_
  - _I haven't worked with react class components in a minute, so I foresee some googling for proper syntax_
  - _BJJ is incredibly complicated (dare I say moreso than even software engineering), and I had to strip the sport down to the barest bones to make this app doable in a week. Going to be tempting to try to cram post MVP stuff in, but musn't lose focus. Also, may be hard to explain some of the concepts to the uninitated among us, so bare with me as I run through my features_
  - _Incredible depression setting in as I am constantly reminded about how long it will be until I can safely return to BJJ during the development process_
  - _I've struggled a bit with rails, and I'm still not entirely comfortable with ruby conventions (rubonic coding?)_
  
 
<br>

### Libraries

> Not sure which libraries will be included yet

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Frontend Framework_ |
|   React Router   | _Creates routes in React._ |
| axios | _fetch data from API_|
| node-sass | _allow SASS in React_ |


<br>

### Client (Front End)

#### Wireframes

https://xd.adobe.com/view/ac79fe6b-fde8-4ea7-4c29-3d9d2d750558-da48/

#### Component Tree

> https://app.lucidchart.com/invitations/accept/eb4fa267-a187-4d89-8c25-4e8d2d163c5b

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
        |__ Burg.jsx
      |__ Main.jsx
        |__ Login.jsx
        |__ Register.jsx
        |__ Home.jsx
        |__ AddTraining.jsx
        |__ ViewTrainings.jsx
        |__ AddTechnique.jsx
        |__ ViewAllTechniques.jsx
        |__ ViewOneTechnique.jsx
|__ services/

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Main       | Class      |   y.  |.  n.  | _Main frontend component_                                        |
|  Login       | Class      |   y.  |.  n.  | _login_                                                          |
|  Register    | Class      |   y.  |.  n.  | _register new user_                                              |
|    Home      | functional |   n.  |.  y.  | _show stats and link to other pages_                             |
|  AddTraining | Class      |   y.  |.  n.  | _Add a training session_                                         |
| ViewTrainings| functional |   n.  |.  y.  | _view training history_                                          |
| Add Technique| Class      |   y.  |.  n. | _Add a new technique_                                             |
|  ViewAllTechniques| functional |   n |.  y.  | _view all techniques_                                         |
|  ViewOneTechnique | functional     |   n.  |.  y.  | _view a single technique                                |


#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create CRUD Actions |    H     |     3 hrs      |     x hrs     |     10hours     |
| models / migrations |    H     |     3 hrs      |     x hrs     |     4hours     |
| Auth                |    H     |     3 hrs      |     x hrs     |     3hours     |
| Header              |    H     |     1 hrs      |     x hrs     |     4hours     |
| Burg                |    M     |     3 hrs      |     x hrs     |     n/a     |
| Login page          |    H     |     3 hrs      |     x hrs     |     2 hours     |
| Register Page       |    H     |     3 hrs      |     x hrs     |     1 hour     |
| Home page           |    H     |     3 hrs      |     x hrs     |     4 hours     |
| AddTraining page.   |    H     |     3 hrs      |     x hrs     |     4 hours     |
| ViewTrainings Page  |    H     |     3 hrs      |     x hrs     |     5 hours     |
| Add Technique page  |    H     |     3 hrs      |     x hrs     |     4 hours     |
| View All Techs page |    H     |     3 hrs      |     x hrs     |     6 hours     |
| View One Tech page  |    H     |     3 hrs      |     x hrs     |     6 hours     |
| TOTAL               |          |     6 hrs      |     x hrs     |     53 hours     |

<br>

### Server (Back End)

#### ERD Model

> https://app.lucidchart.com/invitations/accept/c51ce2d8-496a-4464-af1e-f427fb9eac43

<br>

***

## Post-MVP

> Sky's the limit, but a few ideas:
  - Add your school
  - Add your lineage / instructors
  - Add tournament results
  - Add your rank
  - Build out tracking of subpositions (ie: currently only tracks "guard", should be tracking subguards ie closed guard, half guard, de la riva guard, reverse inverted de la worm guard, etc. It gets complicated)
  - Add deeper technique categorization
  - Add visualizations for statistics
  - Build in gi vs no-gi differentiation
  - Build in advanced positions and techs, including leglocks & leg entanglements, standing techniques, etc
  - Technique name autocomplete / validation for new techs
  - Social networking
  - Academy Yelp-clone
  - YouTube technique library
  - Laundy expense calculator (may need python to handle astronomical numbers)
  - Gi and Rashguard fashion show
  - Coronavirus and pink-eye warnings for academies 
  - List of popular vape flavors and CBD oil brands
  - Like button, but a shaka instead of a thumbs up
  - Add sound effect of someone saying "OSS!" for every conceivable on-page action
  - These last few were jokes, and I swear they are all hilarious if you do jiu-jitsu

***

## Code Showcase

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


