import React from "react";
import {Link} from "react-router-dom"; 
import  '../css/Navbar.css';
function Navbar(){
    return <nav className ="navbar bg-secondary">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/about">About</Link></h4>
        <h4><Link className="link" to="/shop">Shop</Link></h4>
        <h4><Link className="link" to="/links">Links</Link></h4>
        <h4><Link className="link" to="/trade">Trade</Link></h4>
        <h4><Link className="link" to="/reviews">Reviews</Link></h4>
        <h4><Link className="link" to="/create">Create Reviews</Link></h4>
    </nav>
}

export default Navbar;