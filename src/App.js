import React from 'react';
import './App.css';
import Button from './components/Button';
import Output from './components/Output';

import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const buttons = [
      { char: '1', type: 'integer' },       { char: '2', type: 'integer' },   { char: '3', type: 'integer' },     { char: '+', type: 'arithmetic' },
      { char: '4', type: 'integer' },       { char: '5', type: 'integer' },   { char: '6', type: 'integer' },     { char: '-', type: 'arithmetic' },
      { char: '7', type: 'integer' },       { char: '8', type: 'integer' },   { char: '9', type: 'integer' },     { char: '*', type: 'arithmetic' },
      { char: 'AC', type: 'clear' },        { char: '0', type: 'integer' },   { char: '=', type: 'result' },      { char: '/', type: 'arithmetic' },
      { char: 'Sign', type: 'sign' },       { char: 'Sqr', type: 'square' },  { char: 'Root', type: 'root' },
    ];
    return (
      <div className="App">
        <div className="toggle-buttons">
          <button>Scientific Mode</button>
          <button>Dark Mode</button>
        </div>
        <div className="calculator">
          <Output />
          <span className="sign-mode-text">{this.props.signMode ? 'Inputs are now negative.' : ''}</span>
          { buttons.map((button, key) => <Button char={button.char} type={button.type} key={key} />) }
        </div>
      </div>
    );
  }
}

// Container
const mapStateToProps = state => ({
  signMode: state.currentData.signMode
});

const mapDispatchToProps = {};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
