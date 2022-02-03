import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Offer from './pages/offer';
import Navbar from './components/header';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/offer" element={<Offer />}/>
      </Routes>
    </Router>
  );
}

export default App;
