import React, { Component } from 'react';
import './App.css';
import Coin from './Coin'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CoinHistory from './CoinHistory'

class App extends Component {
  render() {

    let coins = [];
    let routes = [];


    for (let result of this.props.coindata){
      let ordered_result = result.sort(function(a,b){return b.avg_price - a.avg_price});
      for (let coin of ordered_result){

        let path = `/coin/${coin.coin}`;
        const CoinRoute = (props) => {
        return (
          <CoinHistory
            name={coin.coin}
            {...props}
          />
          );
        }

        coins.push(<Coin key={coin.coin} name={coin.coin} avg_price={coin.avg_price}/>);
        routes.push(<Route path={path} component={CoinRoute} />)
      }
    }  

    return (
      <div className="App">
        <header className="App-header">
        <Router>
        <div>
        {coins}
        {routes}
        </div>
        </Router>
        </header>
      </div>
      );
  }
}

export default App;
  