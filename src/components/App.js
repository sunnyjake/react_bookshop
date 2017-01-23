import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  constructor(){
    super(props);
  }
  render() {
    return (
      <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Scotch Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Book</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Each smaller components */}
      {props.children}
    </div>
    );
  }
}

export default App;