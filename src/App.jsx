import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as Page from './pages';
import * as Comp from './components';

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
      <section className=" container">
        <Comp.Header />
        <RouterProvider router={router} />
      </section>
      <Comp.Footer />
    </>
  );
};

export default App;
