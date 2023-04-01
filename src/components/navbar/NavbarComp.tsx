import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BlogPost from '../BlogPost';
import Forum from '../Forum';
import Homepage from '../Homepage';
import NavContainer from './NavLinks';
import Footer from '../Footer';
import Gallery from '../Gallery';
import Header from '../Header';


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
          <Route path="/BlogPost" element={ <BlogPost title={''} content={''}/>} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    )
  }
}
