import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header () 
{
    return (
        <header class="top-menu">

        <nav class="top-menu-nav">
            <div class="logo">
                  LOGO
            </div>
        <div class="centered">
            <ul class="top-menu-nav-list">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/day">Day</Link>
                </li>
                <li>
                <Link to="/topics">Month</Link>
                </li>
                <li>
                <Link to="/">Stories</Link>
                </li>
            </ul>
        </div>
            <div class="top-menu-nav-list">
                <li>
                    <a href="login.html">Log out</a> 
                 </li>
            </div>
        </nav>
    </header>
    );
    
}
export default Header;