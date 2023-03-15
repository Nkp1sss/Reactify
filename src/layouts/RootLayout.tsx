import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

class RootLayout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

export default RootLayout;
