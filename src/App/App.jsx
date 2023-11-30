import React, { useState } from 'react';
import './App.css';
import Header from './components/uis/Header/Header';
import Navbar from './components/uis/Navbar/Navbar';
import Footer from './components/uis/Footer/Footer';
import FlexHGrow3 from './components/layouts/FlexHGrow3/FlexHGrow3';
import FlexWGrow1 from './components/layouts/FlexWGrow1/FlexWGrow1';
import MemeSvgViewer from './components/uis/MemeSvgViewer/MemeSvgViewer';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import {emptyMeme} from 'orsys-tjs-meme'

const App = (props) => {
    const [current, setcurrent] = useState(emptyMeme)

  return (
    <div className="App" data-testid="App">
      <FlexHGrow3 style={{height:'calc(100vh - 30px)'}}>
        <Header />
        <Navbar />
        <FlexWGrow1>
          <MemeSvgViewer meme={current}/>
          <MemeForm meme={current}/>
        </FlexWGrow1>
        <Footer />
      </FlexHGrow3>
    </div>
  );
}

export default App;