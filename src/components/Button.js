import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.char}
      </button>
    );
  }
}

export default Button;
