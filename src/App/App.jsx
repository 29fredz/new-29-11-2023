import React from 'react';
import './App.css';
import Header from './components/uis/Header/Header';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/uis/Footer/Footer';
import FlexHGrow3 from './components/layouts/FlexHGrow3/FlexHGrow3';
import FlexWGrow1 from './components/layouts/FlexWGrow1/FlexWGrow1';
import MemeSvgViewer from './components/uis/MemeSvgViewer/MemeSvgViewer.store';
import { MemeFormHookConnected } from './components/functionnal/MemeForm/MemeForm';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import {clear} from './store/current'

const App = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="App" data-testid="App">
      <FlexHGrow3 style={{height:'calc(100vh - 30px)'}}>
        <Navbar bg="dark" data-bs-theme="dark">
            <Navbar.Brand href="#home">
              <Header />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#list">Liste</Nav.Link>
              <Nav.Link href="#create" onClick={() => dispatch(clear())}>Créer</Nav.Link>
              <Nav.Link href="#edit1">Editer N°1</Nav.Link>
            </Nav>
        </Navbar>
        <FlexWGrow1>
          <MemeSvgViewer />
          <MemeFormHookConnected />
        </FlexWGrow1>
        <Footer />
      </FlexHGrow3>
    </div>
  );
}

export default App;
