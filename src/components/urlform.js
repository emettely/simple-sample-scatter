import React, { Component } from 'react';
import styled from '@emotion/styled'

const Form = styled.form`
width: 100%;
padding: 20px;
`
class URLForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.default};
  }

  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <label>
          URL:
          <input type="text" value={this.state.value} onChange={this.props.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}

export default URLForm;