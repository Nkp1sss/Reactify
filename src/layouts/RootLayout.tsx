import { Outlet } from 'react-router-dom';

import HeaderWithTitle from '../components/Header/Header';

function RootLayout() {
  return (
    <>
      <div data-testid="header-with-title">
        <HeaderWithTitle />
      </div>
      <div data-testid="outlet">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
