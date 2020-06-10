
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
|      React       | _tktktktkt._ |
|   React Router   | _tktktktktk._ |
| React Burger | _tkttktktkt._ |

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
| Create CRUD Actions |    H     |     3 hrs      |     x hrs     |     TBD     |
| models / migrations |    H     |     3 hrs      |     x hrs     |     TBD     |
| Auth                |    H     |     3 hrs      |     x hrs     |     TBD     |
| Header              |    H     |     1 hrs      |     x hrs     |     TBD     |
| Burg                |    M     |     3 hrs      |     x hrs     |     TBD     |
| Login page          |    H     |     3 hrs      |     x hrs     |     TBD     |
| Register Page       |    H     |     3 hrs      |     x hrs     |     TBD     |
| Home page           |    H     |     3 hrs      |     x hrs     |     TBD     |
| AddTraining page.   |    H     |     3 hrs      |     x hrs     |     TBD     |
| ViewTrainings Page  |    H     |     3 hrs      |     x hrs     |     TBD     |
| Add Technique page  |    H     |     3 hrs      |     x hrs     |     TBD     |
| View All Techs page |    H     |     3 hrs      |     x hrs     |     TBD     |
| View One Tech page  |    H     |     3 hrs      |     x hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     x hrs     |     TBD     |

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

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
