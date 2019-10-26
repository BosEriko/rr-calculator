import React from 'react';
import './Output.css';

import { connect } from 'react-redux';

class Output extends React.Component {
  render() {
    return (
      <textarea rows="1" className="output" defaultValue={this.props.operation} />
    );
  }
}

// Container
const mapStateToProps = state => ({
  operation: state.operation
});

const mapDispatchToProps = {
  // Empty
};

const OutputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Output);

export default OutputContainer;
