import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/appSettings';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="header-nav nav">
        <NavLink to={ROUTES.HOME}>Home</NavLink>
        <NavLink to={ROUTES.ABOUT}>About</NavLink>
        <NavLink to={ROUTES.FORMS}>Forms</NavLink>
      </nav>
    );
  }
}

export default NavBar;
