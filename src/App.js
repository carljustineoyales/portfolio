import React from 'react';
import './App.scss';
import Navbar from './Pages/Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Herobanner from './Pages/Herobanner';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Works from './Pages/Works';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <main>
        <Herobanner/>
        <About/>
        <Experience/>
        <Works/>
        <Contact/>
      </main>
    </div>
    </Router>
  );
}

export default App;
