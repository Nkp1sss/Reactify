import './Header.scss';

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export type THeaderProps = {
  title: string;
};

enum Title {
  HOME = 'Home',
  ABOUT = 'About',
  NOTFOUND = 'Not found',
}

class Header extends React.Component<THeaderProps> {
  constructor(props: THeaderProps) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <h3>{this.props.title}</h3>
        <nav className="header-nav nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
    );
  }
}

function HeaderWithTitle() {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case '/':
      title = Title.HOME;
      break;
    case '/about':
      title = Title.ABOUT;
      break;
    default:
      title = Title.NOTFOUND;
  }

  return <Header title={title} />;
}

export default HeaderWithTitle;
