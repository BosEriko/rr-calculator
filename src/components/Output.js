import React from 'react';
import './Output.css';

import { connect } from 'react-redux';

class Output extends React.Component {
  render() {
    return (
      <textarea rows="1" className="output" defaultValue={this.props.currentData} />
    );
  }
}

// Container
const mapStateToProps = state => {
  if (state.currentData.output.length > 0) {
    if (isNaN(state.currentData.output[state.currentData.output.length - 1])) {
      return {
        currentData: state.currentData.output[state.currentData.output.length - 2]
      }
    } else {
      return {
        currentData: state.currentData.output[state.currentData.output.length - 1]
      }
    }
  } else {
    return {
      currentData: 0
    }
  }
};

const mapDispatchToProps = {};

const OutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Output);

export default OutputContainer;
