import React from 'react';
import { Link } from 'react-router';

const LauncherShow = props => {
  return(
    <div>
      <Link to= {`/launcher/${props.id}`}>
        <h1>{props.name}</h1>
        <h5>{props.bio}</h5>
      </Link>
    </div>
  )
}
export default LauncherShow;
