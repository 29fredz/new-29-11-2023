import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/uis/Header/Header';
import Navbar from './components/uis/Navbar/Navbar';
import Footer from './components/uis/Footer/Footer';
import FlexHGrow3 from './components/layouts/FlexHGrow3/FlexHGrow3';
import FlexWGrow1 from './components/layouts/FlexWGrow1/FlexWGrow1';
import MemeSvgViewer from './components/uis/MemeSvgViewer/MemeSvgViewer';
import { MemeFormHookConnected } from './components/functionnal/MemeForm/MemeForm';
import {emptyMeme} from 'orsys-tjs-meme'
import { RESSOURCES_NAME, REST_ADDR } from '../config';

const App = (props) => {
    const [current, setcurrent] = useState(emptyMeme);
    const [images, setimages] = useState([]);

    useEffect(() => {
      fetch(`${REST_ADDR}${RESSOURCES_NAME.images}`).then(r=>r.json()).then(arr=>setimages(arr));
    }, [])

  return (
    <div className="App" data-testid="App">
      <FlexHGrow3 style={{height:'calc(100vh - 30px)'}}>
        <Header />
        <Navbar />
        <FlexWGrow1>
          <MemeSvgViewer meme={current} image={images.find(i => i.id === current.imageId)}/>
          <MemeFormHookConnected meme={current} ChangeMeme={(meme) => setcurrent({...current,...meme})} />
        </FlexWGrow1>
        <Footer />
      </FlexHGrow3>
    </div>
  );
}

export default App;
