import React, { Component } from 'react';
import './App.css';
import Chart from './components/chart';
import URLForm from './components/urlform';
import Button from './components/button'

const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    };
  }

  // componentDidMount() {
  //   fetch(API_URL)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       } else {
  //         throw new Error('something went wrong')
  //       }
  //     })
  //     .then(response => this.setState({
  //       results: response.results.filter((r) => {
  //         return r.name === 'JavaScript';
  //       })
  //     }))
  // }

  handlerButtonClick = (event) => { // retains this unlike of lifecycle API DONT NEED BIND?!
    alert('Downloading data set');
    event.preventDefault();

  }

  render() {
    const { results } = this.state;
    return (
    <div className = "App">
    <header>Simple-Sample-Scatter!</header>
      <URLForm default="https://nataliia-radina.github.io/react-vis-example/"/>
      <Chart data = { results } />
      <Button
        onClick={this.handlerButtonClick}
      />
    </div>
    );
  }
}

export default App;