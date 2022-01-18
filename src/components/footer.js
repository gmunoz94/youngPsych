import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import emailIcon from "../assets/email.png";
// import phoneIcon from "../assets/phone.png";


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
    backgroundColor: "#4A5759",
    minWidth: '100%',
    margin: '0'
},
};

// In Navbar, we can assign a style from an object by using curly braces
function Footer() {
  return (
    <Container style={styles.deep}>
      <Row className="mt-auto p-3 d-flex border-top justify-content-evenly ">
        <h5>Dr. Alisa Young - <a href="mailto:alisa@alisayoungtherapy.com">Alisa@alisayoungtherapy.com</a></h5>
        <h5><a href='tel:210-286-7744'>(210) 286-7744</a></h5>
      </Row>
    </ Container>
  );
}

export default Footer;
