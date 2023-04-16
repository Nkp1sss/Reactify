import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from '../../layouts/RootLayout';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Forms from '../../pages/Forms/Forms';
import Notfound from '../../pages/Notfound/Notfound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="forms" element={<Forms />} />
      <Route path="*" element={<Notfound />} />
      {/* <Route path="Notfound" element={<Notfound />} />
      <Route path="*" element={<Navigate replace to="/Notfound" />} /> */}
    </Route>
  )
);

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
