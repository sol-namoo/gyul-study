import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Challenge1 from './challenges/challenge1/Challenge1';
import Challenge2 from './challenges/challenge2/Challenge2';

function App() {
  return (
    <div className="mx-8 my-12">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="challenge1" element={<Challenge1 />} />
          <Route path="challenge2" element={<Challenge2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
