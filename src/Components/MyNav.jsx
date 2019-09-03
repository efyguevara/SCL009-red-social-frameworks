import React from 'react';
import { BrowseeRouter, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';

function MyNav() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="top">
        <Navbar.Brand  as={Link} to="/home">PET LOVERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="Navbar navbar-collapse mr-auto">
          <Nav.Link as={Link} to="/Signin">Registrarse</Nav.Link>
          <Nav.Link as={Link} to="/Login">Iniciar Sesión</Nav.Link>
          <Nav.Link as={Link} to="/Logout">Cerrar Sesión</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNav;
