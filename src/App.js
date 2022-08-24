import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

import Home from './components/Home';
import Numbers from './components/Input';


function App() {
  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:x" element={<Numbers />} />
        <Route path="/:x/:color1/:color2" element={<Numbers />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
