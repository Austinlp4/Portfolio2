import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/works'>
            Works
          </NavLink>
          <NavLink to='/skills'>
            Skills
          </NavLink>
          <NavLink to='/art'>
            Graphic Design/ Art
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </Nav>
        
      </div>
    );
  }
}

const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a{
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;


export default withRouter(App);
