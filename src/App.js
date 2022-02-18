import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from "react";
import cookies from "js-cookie";

import Home from './pages/home';
import Offer from './pages/offer';
import Navbar from './components/header';
import Signup from './pages/signup';
import Login from './pages/login';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import Publish from './pages/publish';
library.add(faSearch, faBars);

function App() {
  const [token, setToken] = useState(cookies.get("token") || null);
  const [searchBar, setSearchBar] = useState("");
  const [sorting, setSorting] = useState("price-asc");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const setUser = (token) => {
    if (token) {
      cookies.set("token", token);
      setToken(token);
    }
    else {
      cookies.remove("token");
      setToken(null);
    }
  };
  return (
    <Router>
      <Navbar token={token}
              setUser={setUser}
              setSearchBar={setSearchBar} 
              setSorting={setSorting} 
              sorting={sorting}
              setMin={setMin}
              setMax={setMax}
      />
      <Routes>
        <Route path="/" element={<Home 
              searchBar={searchBar} 
              sorting={sorting} 
              min={min}
              max={max}
              />}
        />
        <Route path="/offer/:id" element={<Offer />}/>
        <Route path="/signup/" element={<Signup setUser={setUser} />}/>
        <Route path="/login/" element={<Login setUser={setUser} />}/>
        <Route path="/publish" element={<Publish token={token}/>} />
      </Routes>
    </Router>
  );
}

export default App;
