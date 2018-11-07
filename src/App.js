import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const Login = () => (
  <div>
    This will be the home page!
  </div>
);

const Agent = () => (
  <div>
    Agent form will be here.
  </div>
);

const Seller = () => (
  <div>
    Seller form will be here.
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/agent" component={Agent} />
            <Route exact path="/seller" component={Seller} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
