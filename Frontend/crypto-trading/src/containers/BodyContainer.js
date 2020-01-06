import React, { Component } from 'react'
// import Coins from '../components/Coins'
import CoinsContainer from './CoinsContainer'
import UsersContainer from './UsersContainer'
// import Users from '../components/Users'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import TradeContainer from './TradeContainer'


let coinAPI = 'http://localhost:3000/coins'
let userAPI = 'http://localhost:3000/ownerships'
let user = 'http://localhost:3000/users'

export default class BodyContainer extends Component {

    state = {
        coins: [],
        showCoins: [],
        tradeCoins: [],
        users: []
    }

    // componentDidMount() {
    //     fetch(coinAPI)
    //       .then(r => r.json())
    //       .then((coinArr) => {
    //           console.log(coinArr)
    //           this.setState({
    //             coins: coinArr,
    //             showCoins: coinArr
    //           })
    //       })
    // }

    componentDidMount() {
        Promise.all([fetch(coinAPI), fetch(userAPI)])
          .then( ([r1, r2])=> {
              return Promise.all([r1.json(), r2.json()])
          })
          .then(([r1, r2]) => {
              this.setState({
                coins: r1,
                showCoins: r1,
                
                users: r2
              })
          })
    }

    filterCoin = (coin) => {
         console.log(coin)
        if(!this.state.tradeCoins.includes(coin)){
         this.setState({
           tradeCoins: [...this.state.tradeCoins, coin]
            
         })
        }
       }

    addCoinToUser = (coin) => {
        console.log(coin.amount)
        console.log(coin.price)
        
        fetch('http://localhost:3000/ownerships/1', {
          method:'PATCH',
          headers: { 
            'content-type': 'application/json',
            'accept': 'application/json'
          },
          body: JSON.stringify({
          amount: coin.amount
        
          })
        })
          .then(r => r.json())
          .then((coinObj) => {
                // console.log(coinObj)
                // this.setState({
                //     showCoins: [coinObj, ...this.state.showCoins]
                // })
             
          })
          let total = coin.amount * coin.price
          fetch('http://localhost:3000/users/1', {
            method:'PATCH',
            headers: { 
              'content-type': 'application/json',
              'accept': 'application/json'
            },
            body: JSON.stringify({
            balance: coin.price
            })
          })
            .then(r => r.json())
            .then((userObj) => {
                
            }
            )
    }

    render() {
        // console.log(this.state.users)
        // console.log(this.state.showCoins[2].name)
        console.log(this.showCoins)
        return (
            <Router>
                {/* <body> */}
                    <div >
                        <nav className='sidenav'>
                            <ul >
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to="/coins">Coins</Link>
                                </li>
                                <li>
                                    <Link to='/users'>Users</Link>
                                </li>
                                <li>
                                    <Link to='/trade'>Trade</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            
                            <Route path='/coins'>
                                <CoinsContainer coins={this.state.showCoins} filterCoin={this.filterCoin} />
                            </Route>
                            <Route path='/users'>
                                <UsersContainer users={this.state.users}/>
                            </Route>
                            <Route path='/trade'>
                                <TradeContainer coins={this.state.tradeCoins} filterCoin={this.filterCoin} addCoinToUser={this.addCoinToUser} />
                                {/* {this.state.indivCoins.map((coin) => <TradeContainer indivCoins={this.state.indivCoins} key={this.state.indivCoins.key} />)} */}
                            </Route>
                            {/* <Route path='/trade/${coin.id}'>

                            </Route> */}
                            
                        </Switch>
                    </div>
                {/* </body> */}
            </Router>
        )
    }
}
