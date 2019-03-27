import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// import Chart from './components/chart';
import URLForm from './components/urlform';
import Button from './components/button';
import styled from '@emotion/styled'

const API_URL = "https://nataliia-radina.github.io/react-vis-example/";
const AppWrapper = styled.div`
padding: 32px;
border-radius: 4px;
`

const Heading = styled.header`
font-size: 32px;
`
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    };
  }

  handlerButtonClick = (event) => { // retains this unlike of lifecycle API DONT NEED BIND?!
    alert('Downloading data set');
    event.preventDefault();
  }

  handlerURLSubmit = (event) => {
    // alert('Loaded URL: ' + this.state.value);
    axios.get("localhost:5000?url=" + this.state.value)
    .then(response => alert(response))
    event.preventDefault();
  }

  render() {
    const { results } = this.state;
    return (
    <AppWrapper>

    <Heading>Simple-Sample-Scatter!</Heading>
      <URLForm default={API_URL} onSubmit={this.handlerURLSubmit} />
      {/* <Chart data = { results } /> */}
      <Button
        onClick={this.handlerButtonClick}
      />
    </AppWrapper>
    );
  }
}

export default App;