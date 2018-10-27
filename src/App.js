import React, { Component } from 'react';
import './App.css';
import Coin from './Coin'

class App extends Component {
  render() {

    let coins = [];

    for (let result of this.props.coindata){
      for (let coin of result){
        coins.push(<Coin name={coin.coin} avg_price={coin.avg_price}/>);
        console.log(coin);
      }
    }  

    return (
      <div className="App">
        <header className="App-header">
        {coins}
        </header>
      </div>
      );
  }
}

export default App;
