import '../styles/Header.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
    );
  }
}

export default Header;
