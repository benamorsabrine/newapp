import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IMAGES from '../images/inde';

const Menu = () => {
  return (
    <div>
   
          <Navbar   style={{height:"50%"}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
          <Nav.Link href="#features"> <img src={IMAGES.imgTwo} alt="" style={{width:"150px",height:"40px", marginLeft:"-90%"}}></img></Nav.Link>
           
         
        
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu