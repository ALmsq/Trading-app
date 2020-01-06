import React, { Component } from 'react'
import Trade from '../components/Trade'
import {Line} from 'react-chartjs-2'
// import CanvasJS from 'canvasjs'
import CanvasJSReact from '../canvasjs.react.js' 
import {Dropdown} from 'react-bootstrap'

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

// const state = {
//     labels: ['January', 'February', 'March',
//              'April', 'May', 'June', 'July',
//               'August', 'September', 'October',
//             'November', 'December'],
//     datasets: [
//       {
//         label: 'Rainfall',
//         fill: false,
//         lineTension: 0.5,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         data: [65, 59, 80, 81, 56, 77, 89, 43, 55, 9, 100, 78]
//       }
//     ]
//   }



export default class TradeContainer extends Component {

    render() {
        let coins = this.props.coins
        let filteredCoins = this.props.filterCoins
        // console.log(this.props.coins.name)
        console.log(this.props.filterCoins)
        // const options = {
        //     title: {
        //       text: "Basic Column Chart in React"
        //     },
        //     data: [{				
        //               type: "column",
        //               dataPoints: [
        //                   { label: "Apple",  y: 10  },
        //                   { label: "Orange", y: 15  },
        //                   { label: "Banana", y: 25  },
        //                   { label: "Mango",  y: 30  },
        //                   { label: "Grape",  y: 28  }
        //               ]
        //      }]
        //  }
        return (
            <div className='main'>
                
                <div>
                {/* <CanvasJSChart options = {options}/> */}

                {/* <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Coin 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">2</Dropdown.Item>
                        
                    </Dropdown.Menu>
                </Dropdown> */}
                {/* <Trade  coins={this.props.coins}/> */}
                    {coins.map((coin) => <Trade coins={coin} key={coin.id} filterCoin={this.props.filterCoin} addCoinToUser={this.props.addCoinToUser}/>)}
                    {/* {filteredCoins.map((coin) => <Trade coins={coin} key={coin.id}/>)} */}
                    
                </div>
                
            </div>
        )
    }
}
