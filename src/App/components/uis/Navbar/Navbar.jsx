import React from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap'

const Navbar = (props) => {
   
  return (
    <div data-testid="Navbar" className={styles.Navbar}>
          <NavBar bg="dark" data-bs-theme="dark">
            <Container>
            <LinkContainer to="/"><NavBar.Brand>Home</NavBar.Brand></LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to="/thumbnail"><Nav.Link>Liste</Nav.Link></LinkContainer>
              <LinkContainer to="/new"><Nav.Link>Créer</Nav.Link></LinkContainer>
              <LinkContainer to="/editor/1"><Nav.Link>Editer</Nav.Link></LinkContainer>
            </Nav>
            </Container>
        </NavBar>
 
    </div>
  );
};

export default Navbar;
