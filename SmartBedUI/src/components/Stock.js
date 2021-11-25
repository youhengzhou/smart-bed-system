import React from 'react';
import Plot from 'react-plotly.js'; //$ npm install react-plotly.js plotly.js

class Stock extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            stockCharXValue : [],
            stockCharYValue : [],
            symbol: "FB"
        }
        
    }

   
    componentDidMount(){
        this.fetchStock(this.state.symbol);
    }

    fetchStock(symbolpara){
        const pointerToThis = this;
        const API_KEY = 'P7J8QW3O1K1CDRFJ';
        let StockSymbol = symbolpara;
        console.log("ploting grapth is "+ StockSymbol)
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        //API getting last 100 days of data
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        fetch(API_Call) 
          .then(
              function(res){
                  return res.json();
              }

          )
          .then(
            function(data){
                console.log('response data test')
                  console.log(data);
                  for( var key in data['Time Series (Daily)'])
                  {
                      stockChartXValuesFunction.push(key);
                      stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                      
                  }
                  pointerToThis.setState(
                      {
                          stockCharXValue : stockChartXValuesFunction,
                          stockCharYValue : stockChartYValuesFunction
                      });
                  
                  //console.log(stockChartXValuesFunction)
                  //for testing 
              }
          )
    }
    onChange = e=>{
        this.setState({symbol : e.target.value});
        console.log("e.targer.value gives :"+ e.target.value)
        console.log(this.state.symbol) //this prints the previous one...werid
        this.fetchStock(e.target.value)
    }

    render(){

        const {symbol} = this.state;
        return(
            <div>
                <h1>
                    Stock Market
                    
                </h1>
                <form>
                    
                    <label htmlFor = "options">Pick an Company: </label>
                    <select id="options" value = {symbol} onChange={this.onChange}>
                        <option value = "MSFT">Microsoft</option>
                        <option value = "FB">Facebook</option>
                        <option value = "AMZN">Amazon</option>
                        <option value = "AAPL">Apple</option>
                        <option value = "NKE">Nike Inc</option>
                        <option value = "ADS">Adidas AG</option>
                        <option value = "KO">Coca-Cola</option>
                    </select>   

                    <h3> Company Symbol : {this.state.symbol} </h3>
                    <p>current price: {this.state.stockCharYValue[0]}</p>
                </form>
                <Plot
                    data={[
                    {
                        x: this.state.stockCharXValue,
                        y: this.state.stockCharYValue,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    ]}
                    layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
                />

            </div>
        )
    }
}

export default Stock;