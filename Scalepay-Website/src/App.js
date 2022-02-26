import { useState } from "react";
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import './App.css'
import Navbar from "./Components/Navbar";
import Service from "./Components/Service";
import Blog from "./Components/Blog";
import Pricing from "./Components/Pricing";
import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
