import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import headerImg from '../assets/nature1.jpg'
import '../styles/style.css'

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  noDec: {
    textDecoration: 'none'
  },
  deep: {
    backgroundImg: `url(${headerImg})`
  },
  headImg: {
    width: '100%',
    height: 'auto'
  }
};

// In Navbar, we can assign a style from an object by using curly braces
function Header() {
  return (
    <Navbar className="p-3 d-flex border-top justify-content-evenly homeHeader align-items-start">
        <Nav>
          <Nav.Link href='/'>
              <h4>Alisa Young Therapy</h4>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/' id='homeLink'>
              <h4>Home</h4>
          </Nav.Link>
          <Nav.Link href='/aboutMe' id='aboutLink'>
              <h4>About Me</h4>
          </Nav.Link>
          <Nav.Link href='/services' id='servicesLink'>
              <h4>Services</h4>
          </Nav.Link>
        </Nav>

    </Navbar>
  );
}

export default Header;
