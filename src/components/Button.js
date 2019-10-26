import React from 'react';
import './Button.css';

import { connect } from 'react-redux';
import { updateCurrentData } from '../redux';

class Button extends React.Component {
  buttonClick(event) {
    event.preventDefault();
    this.props.updateCurrentData({
      char: this.props.char,
      type: this.props.type
    });
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
const mapStateToProps = state => ({
  // Empty
});

const mapDispatchToProps = {
  updateCurrentData
};

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
