import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
