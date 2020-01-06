import React, { Component } from 'react'
import Coins from '../components/Coins'
import {NavLink} from 'react-router-dom'
import Trade from '../components/Trade'

let API = 'api.nomics.com/v1/currencies/ticker?key=4b84f1a1a7f47f9dd686e342ef6af4a4&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR'
let test = 'https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1h&limit=10'

export default class CoinsContainer extends Component {

    // componentDidMount() {
    //     fetch(test)
    //       .then(r => r.json())
    //       .then((testARR) => {
    //           console.log(testARR)
    //       }
    //       )
    // }
    
    
    
    render() {
        
        // console.log(this.state.test)
        const coins = this.props.coins
        // console.log(coins)
        return (
            <div className='main'>
                <h1> coin</h1>
                
                    <table className='table'>
                        <thead className = 'thead-dark'>
                            <tr>
                            <th scope='col'>Rank</th>
                         <th scope='col'>Name</th>
                         <th scope='col'>Price</th>
                         <th scope='col'>Cap</th>
                         <th scope='col'>Ath</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {coins.map((coin) => 
                                <tr key= {coin.id}>    
                                    <th scope='row'>{coin.rank}</th>
                                    <td> <NavLink to="/trade/" onClick={() => this.props.filterCoin(coin)}>{coin.name}</NavLink> </td>
                                    <td>{coin.price}</td>
                                </tr>
                                )}
                                
                        </tbody>
                    </table>
                
            </div>
            
            
            
            
            
            
            // <div className='main'>
            //     <h1>Coins</h1>

            //      <table className='table'>
            //         {/* <thead className = 'thead-dark'>
            //             <tr>
            //             <th scope='col'>Rank</th>
            //             <th scope='col'>Name</th>
            //             <th scope='col'>Cap</th>
            //             <th scope='col'>Price</th>
            //             <th scope='col'>Ath</th>
            //             </tr>
            //         </thead> */}
            
            //     </table>
            //     {coins.map((coin) => <Coins coins={coin} key={coin.id} />)}
            // </div>
        )
    }
}
