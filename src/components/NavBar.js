import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const NavBar = props => {
  return(
    <div>
      <div className="navbar">
        <BackButton />
        <Link to='/'> HOME </Link>
      </div>
      <div className="content">
        <h1 className="page-title">Launch Questions</h1>
        { props.children }
      </div>
    </div>
  )
}

export default NavBar;
