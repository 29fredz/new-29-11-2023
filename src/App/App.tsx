import React from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state={
      value:0
    };

  }

  render() {
    return (
      <div className="App">
          Valeur : {this.state.value}
          <hr/>
          <Button text="Add 1" type="button" onBoutonClick={()=> this.setState({value: this.state.value+1})}/>
          <Button text="Substract 1"  onBoutonClick={()=> this.setState({value: this.state.value-1})}/>
      </div>
    );
  }
}

export default App;
