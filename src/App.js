import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

const Home = () => (
  <div>
    This will be the home page!
  </div>
);


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Login} />
                <Route exact path="/agent" component={Agent} />
                <Route exact path="/seller" component={Seller} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
