import './App.scss';

import { Routes, Route } from 'react-router-dom';

import RootLayout from '../../layouts/RootLayout';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Forms from '../../pages/Forms/Forms';
import Notfound from '../../pages/Notfound/Notfound';

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="forms" element={<Forms />} />
//       <Route path="*" element={<Notfound />} />
//       {/* <Route path="Notfound" element={<Notfound />} />
//       <Route path="*" element={<Navigate replace to="/Notfound" />} /> */}
//     </Route>
//   )
// );

function App() {
  // return <RouterProvider router={router} />;
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="forms" element={<Forms />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
