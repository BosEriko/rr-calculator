import React from 'react';
import './App.css';
import Button from './components/Button';
import Output from './components/Output';

class App extends React.Component {
  render() {
    const buttons = [
      { data: '1', type: 'integer' },       { data: '2', type: 'integer' }, { data: '3', type: 'integer' },  { data: '+', type: 'function' },
      { data: '4', type: 'integer' },       { data: '5', type: 'integer' }, { data: '6', type: 'integer' },  { data: '-', type: 'function' },
      { data: '7', type: 'integer' },       { data: '8', type: 'integer' }, { data: '9', type: 'integer' },  { data: '*', type: 'function' },
      { data: 'clear', type: 'function' },  { data: '0', type: 'integer' }, { data: '=', type: 'function' },  { data: '/', type: 'function' },
    ];
    return (
      <div className="App">
        <div className="calculator">
          <Output />
          { buttons.map((button, key) => <Button char={button.data} type={button.type} key={key} />) }
        </div>
      </div>
    );
  }
}

export default App;
