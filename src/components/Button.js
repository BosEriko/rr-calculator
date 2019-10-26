import React from 'react';
import './Button.css';

import { connect } from 'react-redux';
import { updateOperation } from '../redux';

class Button extends React.Component {
  render() {
    const { char } = this.props;
    return (
      <button className="button" onClick={() => this.props.updateOperation(char)}>
        {char}
      </button>
    );
  }
}

// Container
const mapStateToProps = state => ({
  // Empty
});

const mapDispatchToProps = {
  updateOperation
};

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
