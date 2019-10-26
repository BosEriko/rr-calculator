import React from 'react';
import './Button.css';

class Button extends React.Component {
  appendToOutput(event) {
    event.preventDefault();
    console.log(this.props.char);
  }
  render() {
    const { char } = this.props;
    return (
      <button onClick={this.appendToOutput.bind(this)}>
        {char}
      </button>
    );
  }
}

export default Button;
