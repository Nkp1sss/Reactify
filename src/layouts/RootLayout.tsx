import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderWithTitle from '../components/Header';

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
