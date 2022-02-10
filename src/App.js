import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from "react";

import Home from './pages/home';
import Offer from './pages/offer';
import Navbar from './components/header';
import Signup from './pages/signup';
import Login from './pages/login';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [searchBar, setSearchBar] = useState("");
  return (
    <Router>
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} setSearchBar={setSearchBar}/>
      <Routes>
        <Route path="/" element={<Home searchBar={searchBar} />}/>
        <Route path="/offer/:id" element={<Offer />}/>
        <Route path="/signup/" element={<Signup setIsConnected={setIsConnected} />}/>
        <Route path="/login/" element={<Login setIsConnected={setIsConnected} />}/>
      </Routes>
    </Router>
  );
}

export default App;
