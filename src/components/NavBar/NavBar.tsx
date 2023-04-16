import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';

function NavBar() {
  return (
    <nav className="header-nav nav">
      <NavLink to={ROUTES.HOME}>Home</NavLink>
      <NavLink to={ROUTES.ABOUT}>About</NavLink>
      <NavLink to={ROUTES.FORMS}>Forms</NavLink>
    </nav>
  );
}

export default NavBar;
