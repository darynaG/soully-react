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
                <Link to="/recomendations">Day</Link>
                </li>
                <li>
                <Link to="/topics/components">Month</Link>
                </li>
                <li>
                <Link to="/stories">Stories</Link>
                </li>
            </ul>
        </div>
            <div class="top-menu-nav-list">
                <li>
                   Log out
                 </li>
            </div>
        </nav>
    </header>
    );
    
}
export default Header;