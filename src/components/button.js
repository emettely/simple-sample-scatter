import React, { Component } from 'react';
import styled from '@emotion/styled'

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