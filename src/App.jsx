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
      path: '/user',
      element: <UserList />,
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
