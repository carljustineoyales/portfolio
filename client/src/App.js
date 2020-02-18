import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import Navbar from './Pages/Components/Navbar';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/archive" component={Archive}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
