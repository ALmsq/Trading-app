import React from 'react'
// import Chart from 'chart.js'
import {Line} from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap'

import CanvasJSReact from '../canvasjs.react.js' 
// var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];


export default class Trade extends React.Component {


    state={
       amount: '',
        price: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
        // console.log(event.target.value)
      }
      handleChange2 = () => {
          
      }
      

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addCoinToUser({
            amount: this.state.amount,
            price: this.state.price
        })
    }
    
    



    render() {
    // console.log(this.props.coins)
    // console.log(this.props.coins[2])
    // let price = this.props.coins[2].price
        console.log(this.state.amount)
        console.log(this.state.price)
        const options = {
			exportEnabled: true,
			title: {
				text: this.props.coins.name
			},
			axisX: {
				valueFormatString: "D MMM"
			},
			axisY: {
				title: "Price",
				includeZero: false,
				prefix: "$"
			},
			data: [{
				type: "candlestick",
				name: this.props.coins.name,
				showInLegend: true,
				yValueFormatString: "$##0.00",
				xValueType: "dateTime",
				dataPoints: dataPoints
			}]
		}
    return (
        
        <div>
            <CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
            
            <h1>Buy/Sell</h1>
            {/* <h1> {this.props} </h1> */}
            <form onSubmit={(event)=>this.onSubmit(event)}>
                <div className="form-row">
                    
                    <div className="col" > BUY {this.props.coins.name}
                        <input name='price' value={this.props.coins.price * this.state.amount} type="number" className="form-control" onChange={this.handleChange}/>
                        <input name='amount' type="number" className="form-control" placeholder="Amount" onChange={this.handleChange}/>
                    <button type="submit" className="btn btn-primary">Buy</button>
                    </div>
                    <div className="col"> SELL {this.props.coins.name}
                        <input type="text" className="form-control" placeholder={this.props.coins.price}/>
                        <input type="text" className="form-control" placeholder="Amount"/>
                    {/* <button type="submit" className="btn btn-primary">Sell</button> */}
                    
                    </div>
                    
                </div>
            </form>

        </div>

    )
    }

    componentDidMount(){
		var chart = this.chart;
		fetch('https://canvasjs.com/data/gallery/react/microsoft-stock-price.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					x: data[i].x,
					y: data[i].y
				});
			}
			chart.render();
		});
	}
}

// export default Trade

