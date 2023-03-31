import './Header.scss';

import { useLocation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import { THeaderProps } from '../../types/component';
import { HeaderTitle, ROUTES } from '../../constants/appSettings';

export function Header(props: THeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <h3>{props.title}</h3>
        <NavBar />
      </div>
    </header>
  );
}

export default function HeaderWithTitle() {
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
