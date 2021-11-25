import React, { Component} from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Trade from './Trade';
import '../css/links.css'

class Links extends Component {

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
  render() {
  return (
  
  <div className='links-class'>
  
  <a
  className="App-link"
  href="https://www.investopedia.com/"
  target="_blank"
  rel="noopener noreferrer"
  >
  Basic Trading Termninology

  </a>
  <p>User 1 <span class="tab"></span> User 2 <span class="tab"></span> User 3</p>
  <p className="App-intro">;{this.state.apiResponse}</p>
  <noscript>Test</noscript>
  </div>
  
  )
  }
}

export default Links
