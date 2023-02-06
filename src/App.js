import { Home, Login, Register, Creation, CreatorProfile } from './pages';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';
import './styles/style.scss';

import { NavBar, SideBar } from './components';

function App() {
  const connectedUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <SideBar />
          <Outlet />
        </div>
      </div>
    );
  };

  const ProtectingRoute = ({ children }) => {
    if (!connectedUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectingRoute>
          <Layout />
        </ProtectingRoute>
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: '/creations/:creationId', element: <Creation /> },
        { path: '/creator/:creatorId', element: <CreatorProfile /> },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
