import { Outlet } from 'react-router-dom';

import HeaderWithTitle from '../components/Header/Header';

function RootLayout() {
  return (
    <>
      <HeaderWithTitle />
      <Outlet />
    </>
  );
}

export default RootLayout;
