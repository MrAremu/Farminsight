import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Forum from '../Forum';
import Homepage from '../Homepage';
import NavContainer from './NavLinks';


export default class NavbarComp extends Component {



  render() {
    return (
      <Router>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavContainer />
        </Navbar>
        </div>
        <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Forum" element={<Forum />} />
        </Routes>
        </div>
      </Router>
    )
  }
}
