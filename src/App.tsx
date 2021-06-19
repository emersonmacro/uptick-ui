import React from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as RRNavLink
} from 'react-router-dom'
import { BsBoxArrowInRight } from 'react-icons/bs'

import Docs from './pages/Docs'
import Home from './pages/Home'

import './App.css'
import '@fontsource/rubik'
import logo from './assets/normal-logo.png'

export default function App() {
  return (
    <Router>
      <Container>

        <Navbar className="app-navbar">
          <NavbarBrand>
            <img src={ logo } width="100" height="40" className="d-inline-block align-middle" />
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink
                className="navlink"
                activeClassName="active-navlink"
                tag={ RRNavLink }
                to="/"
                exact
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navlink"
                activeClassName="active-navlink"
                tag={ RRNavLink }
                to="/docs"
                exact
              >
                Docs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navlink"
                tag={ RRNavLink }
                to="/app"
                exact
              >
                Launch App <BsBoxArrowInRight />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Container>
    </Router>
  )
}
