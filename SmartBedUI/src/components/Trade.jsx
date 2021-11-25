import React, { useState } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  '../css/trade.css'

function Trade() {
    const [stockInfo, setStockInfo] = useState([{
        owner: '',
        stockName:'',
        stockShares:''
    }])

    return(
        <div className='trade-class'>
            <h1>This is the page that we do all the trading.</h1>
            {stockInfo.map(stockInfo=>
                 <div>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem>
                            <ListItemText primary={"Name: "+stockInfo.stockName} />
                            <ListItemText primary={"Shares: "+stockInfo.stockShares} />  
                        </ListItem>
                    </List>
                 </div>
            )}
        </div>
    )
}
export default Trade
