import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowAllTechs(props) {
  const { techniques, currentUser, destroyTechnique, history } = props;
  return (
    <>
      <hr />
      <h3>Your Techniques</h3>
      {
        techniques.map(technique => (
          <React.Fragment key={technique.id}>
            {/* small change:  we made the p tags into links to the food item route */}
            <Link to={`/techniques/${technique.name}`}>{technique.name}</Link>
            {
              currentUser && currentUser.id === technique.user_id && (
                <>
                  {/* our edit button just needs to route us to the edit component */}
                  {/* we also need to interpolate the id in the route */}
                  <button onClick={() => history.push(`/techniques/${technique.id}/edit`)}>edit</button>
                  <button onClick={() => destroyTechnique(technique.id)}>delete</button>
                </>
              )
            }
            <br/>
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/new/technique'><button>Create</button></Link>
    </>
  )
}
