import './Header.scss';

import React from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import { THeaderProps } from '../../types/component';
import { HeaderTitle, ROUTES } from '../../constants/appSettings';

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
    case ROUTES.HOME:
      title = HeaderTitle.HOME;
      break;
    case ROUTES.ABOUT:
      title = HeaderTitle.ABOUT;
      break;
    case ROUTES.FORMS:
      title = HeaderTitle.FORMS;
      break;
    default:
      title = HeaderTitle.NOTFOUND;
  }

  return <Header title={title} />;
}

export default HeaderWithTitle;
