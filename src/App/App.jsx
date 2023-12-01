import React from 'react';
import './App.css';
import Header from './components/uis/Header/Header';
import Navbar from './components/uis/Navbar/Navbar';
import Footer from './components/uis/Footer/Footer';
import FlexHGrow3 from './components/layouts/FlexHGrow3/FlexHGrow3';
import { Routes, Route } from 'react-router-dom'
import Thumbnail from './pages/Thumbnail';
import Editor from './pages/Editor';


const App = (props) => {
  return (
    <div className="App" data-testid="App">
      <FlexHGrow3 style={{height:'calc(100vh - 30px)'}}>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<div>Salut</div>} />
          <Route path='/new' element= {<Editor/>} />
          <Route path='/editor/:id' element= {<Editor />} />
         <Route path='/thumbnail' element= {<Thumbnail />} />
          </Routes>
        <Footer />
      </FlexHGrow3>
    </div>
  );
}

export default App;
