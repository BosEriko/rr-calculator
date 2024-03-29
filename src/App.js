import React from 'react';
import './App.css';
import Button from './components/Button';
import Output from './components/Output';

import { connect } from 'react-redux';
import { 
  toggleDarkMode,
  toggleScientificMode
} from './redux';

class App extends React.Component {
  render() {
    const normalButtons = [
      { char: '1', type: 'integer' },       { char: '2', type: 'integer' },   { char: '3', type: 'integer' },     { char: '+', type: 'arithmetic' },
      { char: '4', type: 'integer' },       { char: '5', type: 'integer' },   { char: '6', type: 'integer' },     { char: '-', type: 'arithmetic' },
      { char: '7', type: 'integer' },       { char: '8', type: 'integer' },   { char: '9', type: 'integer' },     { char: '*', type: 'arithmetic' },
      { char: 'AC', type: 'clear' },        { char: '0', type: 'integer' },   { char: '=', type: 'result' },      { char: '/', type: 'arithmetic' },
    ];
    const scientificButtons = normalButtons.concat([
      { char: 'Sign', type: 'sign' }, { char: 'Sqr', type: 'square' }, { char: 'Root', type: 'root' },
    ]);
    const buttons = this.props.scientificMode ? scientificButtons : normalButtons;
    return (
      <div className={this.props.darkMode ? "App dark" : "App"}>
        <div className="toggle-buttons">
          <button onClick={() => this.props.toggleScientificMode()}>
            { this.props.scientificMode ? "Normal Calculator" : "Scientific Calculator" }
          </button>
          <button onClick={() => this.props.toggleDarkMode()}>
            { this.props.darkMode ?  "Light Mode" : "Dark Mode" }
          </button>
        </div>
        <div className={this.props.darkMode ? "calculator dark" : "calculator"}>
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
  signMode: state.currentData.signMode,
  darkMode: state.currentData.darkMode,
  scientificMode: state.currentData.scientificMode
});

const mapDispatchToProps = {
  toggleDarkMode,
  toggleScientificMode
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
