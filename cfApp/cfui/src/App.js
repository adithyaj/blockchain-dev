import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {pfContract} from './EthereumSetup'; //{greeterContract} == greeterContract Object in line, i can say {obj1,obj2,...} from ./file




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            amt: '',
            addr: String(pfContract.address)
            
        }
    }
    handleClick() {
      alert('hi');


    }


    componentWillMount() {
        var namee = pfContract.getName.call();
        var amtt = pfContract.getTotalAmt.call();
        //Object.getOwnPropertyNames(pfContract);

        this.setState( {
            name: String(namee),
            amt: String(amtt),
            
        });
    }

    
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.name}</h1>
        </header>
            <h3> Total Raised: Ξ {this.state.amt} </h3>
            <br></br>
            <h3> Address to Back this Project w/ sendFund: {this.state.addr} </h3>
      </div>
    );
  }
}

export default App;
