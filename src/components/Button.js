import React from 'react';
import './Button.css';

import { connect } from 'react-redux';
import { 
  addOperationNumber,
  addOperationArithmetic,
  getOperationResult,
  signOperation,
  squareOperation,
  rootOperation,
  clearOperation
} from '../redux';

class Button extends React.Component {
  buttonClick(event) {
    event.preventDefault();
    switch (this.props.type) {
      case "integer":
        this.props.addOperationNumber({
          char: this.props.char,
          type: this.props.type
        });
        break;
      case "arithmetic":
        this.props.addOperationArithmetic({
          char: this.props.char,
          type: this.props.type
        });
        break;
      case "result":
        this.props.getOperationResult({
          char: this.props.char,
          type: this.props.type
        });
        break;
      case "clear":
        this.props.clearOperation({
          char: this.props.char,
          type: this.props.type
        });
        break;
      case "sign":
        this.props.signOperation({
          char: this.props.char,
          type: this.props.type
        });
        break;
      case "square":
        this.props.squareOperation({
          char: this.props.char,
          type: this.props.type
        });
        break;
      case "root":
        this.props.rootOperation({
          char: this.props.char,
          type: this.props.type
        });
        break;
      default:
        console.log("Something went wrong");
    }
  }
  render() {
    return (
      <button className={this.props.darkMode ? "button dark" : "button"} onClick={this.buttonClick.bind(this)}>
        {this.props.char}
      </button>
    );
  }
}

// Container
const mapStateToProps = state => ({
  darkMode: state.currentData.darkMode,
});

const mapDispatchToProps = {
  addOperationNumber,
  addOperationArithmetic,
  getOperationResult,
  signOperation,
  squareOperation,
  rootOperation,
  clearOperation
};

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
