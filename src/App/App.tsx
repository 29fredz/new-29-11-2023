import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
        Hello World
        <hr/>
        <Button text="Salut !" type="button" />
        <Button text="Holla !" type="submit" />
        <Button text="Hi !" type="reset" />
        <Button text="Hello !" size={{margin: {right:"25px", left:"3px"}}} />
    </div>
  );
}

export default App;
