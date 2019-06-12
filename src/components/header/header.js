import React from 'react';

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
                   <a href="new-recomendation-page.html">Home</a> 
                </li>
                <li>
                    <a href="new-mood-page.html">Day</a>
                </li>
                <li>
                  <a href="new-recomendation-page.html">Month</a>
                </li>
                <li>
                   <a href="new-recomendation-page.html">Stories</a> 
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