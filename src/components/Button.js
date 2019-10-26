import React from 'react';
import './Button.css';

import { connect } from 'react-redux';
import { updateCurrentData } from '../redux';

class Button extends React.Component {
  render() {
    const { char } = this.props;
    return (
      <button className="button" onClick={() => this.props.updateCurrentData(char)}>
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
  updateCurrentData
};

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
