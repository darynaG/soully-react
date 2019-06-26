import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../../assets/img/logo_soully.png";
import "../../css/Burger.css";

class HamburgerIcon extends Component{


  render() {

    return(
        <div className="burger-container">
        <a className="burger-icon-link" onClick={this.onClickHandler} href="#">
          <span className="burger-span-element white-burger-icon-color"></span>
          <span className="burger-span-element white-burger-icon-color"></span>
          <span className="burger-span-element white-burger-icon-color"></span>
        </a>
        <header className="b-top-menu">
        <nav className="b-top-menu-nav">
            <div className="b-centered">
                <ul className="b-top-menu-nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/day">Day</Link>
                    </li>
                    <li>
                        <Link to="/month">Month</Link>
                     </li>
                    <li>
                         <Link to="/stories">Stories</Link>
                        </li>
                </ul>
             </div>
             <div className="b-top-menu-nav-list">
                 <li>Log out</li>
            </div>
         </nav>
        </header>
      </div>
        /*
        <header className="b-top-menu">
        <nav className="b-top-menu-nav">
            <div className="b-logo">
                <img src= {logo}/>
            </div>
            <div className="b-centered">
                <ul className="b-top-menu-nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/day">Day</Link>
                    </li>
                    <li>
                        <Link to="/month">Month</Link>
                     </li>
                    <li>
                         <Link to="/stories">Stories</Link>
                        </li>
                </ul>
             </div>
             <div className="b-top-menu-nav-list">
                 <li>Log out</li>
            </div>
         </nav>
        </header>*/
    );
  }
}

export default HamburgerIcon;