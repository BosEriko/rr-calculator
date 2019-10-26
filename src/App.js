import React from 'react';
import './App.css';
import Button from './components/Button';
import Output from './components/Output';

class App extends React.Component {
  render() {
    const buttons = [
      '1',      '2',      '3',      '+',
      '4',      '5',      '6',      '-',
      '7',      '8',      '9',      '*',
      'Clear',  '0',      '=',      '/',
    ];
    return (
      <div className="App">
        <div className="calculator">
          <Output />
          { buttons.map((char, key) => <Button char={char} key={key} />) }
        </div>
      </div>
    );
  }
}

export default App;
