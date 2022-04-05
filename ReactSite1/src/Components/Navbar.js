import React ,{useState} from "react";
import { Navbar ,Nav,Button,Container,  Form, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "../styles.css";

const Styles=styled.div `
     a, .navbar-brand, .navbar-nav .nav-link{
       color:dark blue;
       &:hover{
         color:white
       }
     }
`;

export default function Navibar ()  {
  const [show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  return(
    <>
    <Styles>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Container>
           <Navbar.Brand>CosmicTraveler</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
           <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                  <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
                <Nav>
                  <Button variant="primary" className="mr-2" onClick={handleShow}>Log In</Button>
                  <Button variant="primary" onClick={handleShow}>Sign out</Button>
                </Nav>
           </Navbar.Collapse>
           </Container>
     </Navbar>
     </Styles>

     <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                <Form.Group controlId="fromBasicEmail">
                           <Form.Label>Email Adress</Form.Label>
                           <Form.Control type="email" placeholder="Enter email"/>
                           <Form.Text className="text-muted">We'll never share your email with anyone else!</Form.Text>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" placeholder="Enter password"/>
                </Form.Group>
                <Form.Group controlId="fromBasicCheckbox">
                           <Form.Check type="checkbox"/>
                </Form.Group>
                </Form>
              </Modal.Body>
     </Modal>
     </>
  );
}
