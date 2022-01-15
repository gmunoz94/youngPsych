import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
    backgroundColor: "#4A5759"
},
};

// In Navbar, we can assign a style from an object by using curly braces
function Header() {
  return (
    <Navbar style={styles.deep} className="p-3 d-flex border-top justify-content-evenly">
        <Nav>
          <Nav.Link href='/'>
              <h4 className='text-white'>Alisa Young Therapy</h4>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/'>
              <h4 className='text-white'>Home</h4>
          </Nav.Link>
          <Nav.Link href='/aboutMe'>
              <h4 className='text-white'>About Me</h4>
          </Nav.Link>
          <Nav.Link href='/services'>
              <h4 className='text-white'>Services</h4>
          </Nav.Link>
        </Nav>

    </Navbar>
  );
}

export default Header;
