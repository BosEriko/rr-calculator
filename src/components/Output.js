import React from 'react';
import './Output.css';

class Output extends React.Component {
  render() {
    return (
      <textarea rows="1" className="output" defaultValue="0"/>
    );
  }
}

export default Output;
