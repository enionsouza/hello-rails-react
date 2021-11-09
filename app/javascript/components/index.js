import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './greeting';

const App = () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<div>Index page</div>} />
      <Route path='/greetings' element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
