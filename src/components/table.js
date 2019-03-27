import React, { Component } from 'react';
import styled from '@emotion/styled'

const Img = styled.img`
width: 100%;
`

const P = styled.p`

`

class Table extends Component {

  zipped = (categories) => {
    if (categories) {
      const categorical = categories.categorical
      const numerical = categories.numerical
      const zipped = categorical.map((e,i) => [e, numerical[i]])
      return zipped.map(vs => <tr>{
        vs.map(v => <td><input type="checkbox" />{v}</td>)
      }</tr>)
    }
  }

  images = (categories) => {
    if (categories) {
      return (
        <div>
          <p>
Number of categorical features:  <strong>38</strong><br />
Number of numerical features:  <strong>19</strong></p>
<h1>Time series</h1>
      <Img src="/images/graph1.png"/>
<h1>X Y Analysis</h1>
      <Img src="/images/graph2.png"/>
<p>Selected: Age of vehicle and number of accidents</p>
      <Img src="/images/graph3.png"/>
<p>Selected: Age of drivers and number of accidents</p>

      <h1>Correlations</h1>
      <Img src="/images/graph4.png"/>
      <h2>Top Absolute Correlations</h2>
      <table>
      <tr>
          <th>feature X</th>
          <th>feature Y</th>
          <th>correlation</th>
        </tr>

        <tr>
          <td>Number_of_Casualties</td>
          <td>Number_of_Vehicles</td>
          <td>0.382233</td>
        </tr>

        <tr>
          <td>Speed_limit</td>
          <td>Number_of_Vehicles</td>
          <td>0.161661</td>
        </tr>

        <tr>
          <td>Number_of_Casualties</td>
          <td>Speed_limit</td>
          <td>0.148506</td>
        </tr>
      </table>
      <P>
      A correlation matrix is a table showing correlation coefficients between variables. The correlation coefficient measures the strength and direction of a linear relationship between two variables. Each cell in the table shows the correlation between two variables.
      </P>
</div>
      )
      
    }
  }

  table = (categories) => {
    return(
      <div>
      <table>
        <tbody>
      <tr>
        {Object.keys(categories).map(h => <th>{h}</th>)}
      </tr>
      {this.zipped(categories)}
      </tbody>
      </table>
      {this.images(categories)}

</div>
    )
  }
  render() {
    return (
      this.table(this.props.categories)
      )
  }
}

export default Table;