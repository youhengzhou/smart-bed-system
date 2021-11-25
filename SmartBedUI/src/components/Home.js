import React, { Component} from "react";
import stock from './stock.gif';
import  '../css/Home.css';
import Stock from './Stock'
import Ticker from "./Ticker"
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
      }
    
      callAPI() {
          fetch("http://localhost:9000/testAPI")
              .then(res => res.text())
              .then(res => this.setState({ apiResponse: res }))
              .catch(err => err);
      }
    
      componentWillMount() {
          this.callAPI();
      }
  render(){
    return (
        <div className='home-class '>
        <h1> Stock Trading Competition</h1>
        <img src={stock} className="App-logo" alt="logo" />
        
        <p>User 1 <span class="tab"></span> User 2 <span class="tab"></span> User 3</p>
        <div>
        <Ticker />
        </div>
        
        <Stock/>
        <p className="App-intro">;{this.state.apiResponse}</p>
        </div>
    )
        
}
}


export default Home
