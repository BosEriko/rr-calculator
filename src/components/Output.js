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
const mapStateToProps = state => ({
  currentData: state.currentData
});

const mapDispatchToProps = {
  // Empty
};

const OutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Output);

export default OutputContainer;
