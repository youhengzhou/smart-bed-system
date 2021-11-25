import React, { Component, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  textField: {
    '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    background: 'white',
  },
  input: {
    color: 'black'
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'black'
    },
  },
}));

//  handleChange(event) { =>
//    this.setState({value: event.target.value});
//  }

 const handleChange = (event) => {
  this.setState({value: event.target.value});
}

const handleSubmit = (event) => {
  this.setState({value: event.target.value});
}

// handleSubmit(event) {
//   alert('An essay was submitted: ' + this.state.value);
//   event.preventDefault();
// }


export default function ShopNow() {
  const classes = useStyles();
  const [stockname, setStockname] = useState('');
  const [stockprice, setStockprice] = useState('');

    // this.setState({symbol : e.target.value});
    // console.log("e.targer.value gives :"+ e.target.value)
    // console.log(this.state.symbol) //this prints the previous one...werid
    // this.fetchStock(e.target.value)

  

  return( 

      <span>

      
        <form className={classes.textField} noValidate autoComplete="off" onSubmit={this.handleSubmit} method='get' target='_blank'>
            <TextField 
            InputProps={{
            className: classes.input,}}
            id="stock-name" label="Stock Name" variant="filled"
            onChange={() => this.handleChange()}
            />

            <TextField 
            InputProps={{
            className: classes.input,}}
            id="stock-amount" label="Stock Amount" variant="filled" 
            onChange={setStockprice}    
            />
            
        </form>
        
        <div className={classes.button}>
            <Button variant="contained">
                BUY
            </Button>
            <Button variant="contained">
                SELL
            </Button>
            <Button variant="contained"
            onClick={console.log(stockname)}>
                DEBUG
            </Button>
        </div>
    
    
    <h1> In Buy Stocks Mode </h1>



    </span>




    );








}


