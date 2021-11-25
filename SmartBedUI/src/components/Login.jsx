import React, { useState } from 'react'

function Login() {
    const [stockInfo, setStockInfo] = useState([{
        owner: '',
        stockName:'',
        stockShares:''
    }])

    return(
        <div className='login'>
            <h1>Login Page</h1>
        </div>
    )
}
export default Login