import React, {useState} from 'react'

function Ticker() {

    const [stockName, setStockName] = useState(0);

    
    var unirest = require("unirest");

    var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary");
    
    

    req.query({
	    "symbol": "SPY",
	    "region": "US"
    });

    req.headers({
	"x-rapidapi-key": "1a36e2d006msh25f6a651462e3b6p1b9578jsnc3981e1024d0",
	"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	"useQueryString": true
    });

    var price
    var test = ""

    req.end(function (res) {
        
        if (res.error){
            setStockName("Exceed API call limit")
            return
        }
        

        console.log(res.body);
        price= res.body
        test = console.log(price.quoteType.symbol)
        setStockName(price.quoteType.exchange)
        
    });
    

    return(
        <div>
            SPY: {stockName}
        </div>  
         )
 }
export default Ticker