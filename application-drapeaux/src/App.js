import React from 'react';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;