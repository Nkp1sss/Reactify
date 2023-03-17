import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderWithTitle from '../components/Header';

class RootLayout extends React.Component {
  render() {
    return (
      <>
        <HeaderWithTitle />
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </>
    );
  }
}

export default RootLayout;
