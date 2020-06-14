import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowAllTechs(props) {
  const { techniques, currentUser, destroyTechnique, history } = props;
  let techNames = techniques.map(technique => technique.name)
  let uniqueList = techNames.reduce((unique, technique) => {
    return unique.includes(technique) ? unique : [...unique, technique]
  }, [])
  
  return (
    <>
      <hr />
      <h3>Your Techniques</h3>
      {
        uniqueList.map(technique => (
          <React.Fragment key={technique}>
            <Link to={`/techniques/${technique}`}>{technique}</Link>
            {/* {
              currentUser && currentUser.id === technique.user_id && (
                <>
                  <button onClick={() => history.push(`/techniques/${technique.id}/edit`)}>edit</button>
                  <button onClick={() => destroyTechnique(technique.id)}>delete</button>
                </>
              )
            } */}
            <br/>
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/new/technique'><button>Create</button></Link>
    </>
  )
}
