import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import About from './components/about/About';
import Works from './components/works/Works';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

const Home = (props) => {
    return(
      <Greet>
        <h1>Austin Pendergrast</h1>
        <h2>Full Stack Web Developer</h2>
      </Greet>
    )
}

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Nav>
        <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/works'>
            Works
          </NavLink>
          <NavLink to='/skills'>
            Skills
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </Nav>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/works' component={Works}/>
        <Route path='/works' component={Skills}/>
        <Route path='/works' component={Contact}/>
      </AppContainer>
    );
  }
}

const Nav = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding: 1% 3%;
  a{
    text-decoration: none;
    color: rgba(243, 239, 239, 1);
    text-shadow: 1px 1.5px rgba(138, 135, 135, .8);
    font-weight: bold;
    font-size: 1.3rem;
    &:hover{
      color: white;
      text-shadow: 1px 1.5px rgba(138, 135, 135, 1);
    }
  }
`;

const Greet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  align-self: center;
  margin-top: 200px;
  h1{
    background-color: rgba(138, 135, 135, .4);
    color: transparent;
    text-shadow: 0px 2px 1.5px rgba(243, 239, 239, 1);
    -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
    font-weight: bold;
    font-size: 5rem;
  }
  h2 {
    color: rgba(243, 239, 239, 1);
    text-shadow: 1px 1.5px rgba(138, 135, 135, .8);
    font-weight: bold;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export default withRouter(App);
