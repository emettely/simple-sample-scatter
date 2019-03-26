import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, MarkSeries} from 'react-vis';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            dataArr: props.data.map((d)=> {
                return {x: d.year, 
                        y: d.count,
                        size: 1}
            })
        };
    }

    // dataArr = props.data.map((d)=> {
    //     return {x: d.year, 
    //             y: d.count,
    //             size: 1}


    // const dataArr = props.data.map((d)=> {
    //     return {x: d.year, 
    //             y: parseFloat(d.count/1000),
    //             size: 1}
    // });


    render() {
        console.log(this.state)
        return (
            <XYPlot width={300} height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="year" />
                <YAxis title="pull requests (thousands)" />
                <MarkSeries
                    data={this.state.dataArr}
                    strokeWidth= {2}
                    opacity="0.8"
                    sizeRange={[5, 15]}
                />
            </XYPlot>
        );
    }
}

export default Chart;