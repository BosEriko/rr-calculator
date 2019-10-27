import React from 'react';
import './Button.css';

import { connect } from 'react-redux';
import { 
  addOperationNumber,
  addOperationArithmetic,
  getOperationResult,
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
      default:
        console.log("Something went wrong");
    }
  }
  render() {
    return (
      <button className="button" onClick={this.buttonClick.bind(this)}>
        {this.props.char}
      </button>
    );
  }
}

// Container
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addOperationNumber,
  addOperationArithmetic,
  getOperationResult,
  clearOperation
};

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
