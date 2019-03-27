import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// import Chart from './components/chart';
import URLForm from './components/urlform';
import Button from './components/button';
import Table from './components/table';
import styled from '@emotion/styled'


const API_URL = "https://nataliia-radina.github.io/react-vis-example/";
const AppWrapper = styled.div`
  padding: 10px;
  border-radius: 4px;
  align: center;
  margin: auto;
  width: 50%;
`
const Heading = styled.header`
font-size: 32px;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      categories: '',
      url: API_URL
    };
  }

  handlerButtonClick = (event) => { // retains this unlike of lifecycle API DONT NEED BIND?!
    alert('Downloading data set');
    event.preventDefault();
  }

  handlerURLChange = (event) => {
    this.setState({url: event.target.value});
  }

  handlerURLSubmit = (event) => {
    axios.get("http://127.0.0.1:5000?url=" + this.state.url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(response => {
        this.setState({categories: response.data})
      })
    event.preventDefault();  // prevents reloading
  }

  render() {
    return (
    <AppWrapper>

    <Heading>BeetleJuice</Heading>
      <URLForm default={this.state.url} onSubmit={this.handlerURLSubmit} onChange={this.handlerURLChange}/>
      <Table categories={this.state.categories} />
      <Button
        onClick={this.handlerButtonClick}
      />
    </AppWrapper>
    );
  }
}

export default App;