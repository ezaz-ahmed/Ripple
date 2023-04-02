import { Routes, Route } from 'react-router-dom';

import * as Page from './pages';
import * as Comp from './components';

const App = () => {
  return (
    <>
      <section className=" container min-h-screen">
        <Comp.Header />

        <Routes>
          <Route exact path="/" element={<Page.UserList />} />

          <Route exact path="/user/:id" element={<Page.UserProfile />} />

          <Route path="*" element={<Page.NotFound />} />
        </Routes>
      </section>
      <Comp.Footer />
    </>
  );
};

export default App;
