import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
    <button onClick={this.props.onClick}>
        Download data set
    </button>
    );
  }
}

export default Button;