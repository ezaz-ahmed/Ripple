import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as Page from './pages';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Page.UserList />,
      errorElement: <Page.Error />,
    },
    {
      path: '/user/:id',
      element: <Page.UserProfile />,
      errorElement: <Page.Error />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
