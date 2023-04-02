import { RouterProvider, Routes, Route } from 'react-router-dom';
import * as Page from './pages';
import * as Comp from './components';

const App = () => {
  return (
    <>
      <section className=" container min-h-screen">
        <Comp.Header />

        <Routes>
          <Route
            path="/"
            element={<Page.UserList />}
            errorElement={<Page.Error />}
          />

          <Route
            path="/user/:id"
            element={<Page.UserProfile />}
            errorElement={<Page.Error />}
          />
        </Routes>
      </section>
      <Comp.Footer />
    </>
  );
};

export default App;
