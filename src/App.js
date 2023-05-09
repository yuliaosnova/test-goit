import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/HomePage'));
const Tweets = lazy(() => import('./pages/TweetsPage'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
