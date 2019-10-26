import React from 'react';
import './App.css';
import Button from './components/Button';
import Output from './components/Output';

class App extends React.Component {
  render() {
    const buttons = [
      { char: '1', type: 'integer' },       { char: '2', type: 'integer' }, { char: '3', type: 'integer' },  { char: '+', type: 'function' },
      { char: '4', type: 'integer' },       { char: '5', type: 'integer' }, { char: '6', type: 'integer' },  { char: '-', type: 'function' },
      { char: '7', type: 'integer' },       { char: '8', type: 'integer' }, { char: '9', type: 'integer' },  { char: '*', type: 'function' },
      { char: 'clear', type: 'function' },  { char: '0', type: 'integer' }, { char: '=', type: 'function' },  { char: '/', type: 'function' },
    ];
    return (
      <div className="App">
        <div className="calculator">
          <Output />
          { buttons.map((button, key) => <Button char={button.char} type={button.type} key={key} />) }
        </div>
      </div>
    );
  }
}

export default App;
