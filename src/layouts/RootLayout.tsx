import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderWithTitle from '../components/Header/Header';

class RootLayout extends React.Component {
  render() {
    return (
      <>
        <HeaderWithTitle />
        <Outlet />
      </>
    );
  }
}

export default RootLayout;
