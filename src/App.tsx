import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Forms from './pages/Forms';
import Notfound from './pages/Notfound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="forms" element={<Forms />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
