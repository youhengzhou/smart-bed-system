import './App.css';
import React, { Component } from 'react';
import Trade from './components/Trade'
import {Switch, Route, Link,BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/reviews';
import CreateReview from './components/CreatReviews';
import About from './components/About';
import Links from './components/Links';
import Shop from './components/Shop';
import Navbar from "./components/Navbar"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ""}
  }

  callAPI() {  //the object that .then returns, got passed to the next .then as parameter.
      fetch("http://localhost:9000/testAPI") //"testAPI" invoke the function in api/routes/testAPI.js
          .then(res => res.text()) //converte res to text format
          .then(res => this.setState({ apiResponse: res})) //set state to store res in the apiResponse
          .catch(err => err);
  }

  componentWillMount() {
      console.log('component will mount')
      this.callAPI(); //componentWillMount will trgger before the initial render(when the component load)
  }

  render() {
    return(
      <div className="App">
          
        <Router >
        <Navbar></Navbar>
          <Route path = "/" exact>
            <Home></Home>
          </Route>
          <Route path='/reviews'>
            <Reviews />
          </Route>
          <Route path='/create'>
            <CreateReview />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/links" component={Links} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/trade" component ={Trade}/>
        </Router>
        <header className="App-header">
       {/* <p className="App-intro">;{this.state.apiResponse}</p> */}
        {/* create the Resource page */}
        
        
        

        {/* <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/links" component={Links} />
            <Route path="/buystocks" component={BuyStocks} />
            <Route component={Error} />
          </Switch>
        </main>

        <Link to="/buystocks">  Click To Buy Stocks  </Link>

        <div>
          <Link to="/">Home </Link>    
          <Link to="/about">About Us </Link> 
          <Link to="/shop">Shop Now </Link>
          <Link to="/links">Links </Link>
        </div> */}

        
        {/* <a
          className="App-link"
          href="https://www.investopedia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Basic Trading Termninology

        </a> */}
        
        
        
        
      </header>
      

      
    </div>
    )
    
  }
}

export default App;
