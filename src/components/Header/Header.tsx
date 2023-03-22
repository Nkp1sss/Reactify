import './Header.scss';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { THeaderProps } from '../../types/component';
import NavBar from '../NavBar/NavBar';

enum Title {
  HOME = 'Home',
  ABOUT = 'About',
  FORMS = 'Forms',
  NOTFOUND = 'Not found',
}

class Header extends React.Component<THeaderProps> {
  constructor(props: THeaderProps) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <h3>{this.props.title}</h3>
          <NavBar />
        </div>
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
