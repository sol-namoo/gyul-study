import { Routes, Route } from 'react-router-dom';

import Challenge1 from './challenges/challenge1/page';
import Layout from './components/Layout';
import Home from './challenges/Home';

function App() {
  return (
    <div className="mx-8 my-12">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="challenge1" element={<Challenge1 />} />
        </Route>
        {/* <Route path="/gallery" element={<DetailCardPage />}>
          <Route path=":cardId" element={<DetailCard />} />
        </Route> */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
