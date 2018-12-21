import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink>
            About
          </NavLink>
          <NavLink>
            Works
          </NavLink>
          <NavLink>
            Skills
          </NavLink>
          <NavLink>
            Graphic Design/ Art
          </NavLink>
          <NavLink>
            Contact
          </NavLink>
        </nav>
        
      </div>
    );
  }
}

export default withRouter(App);
