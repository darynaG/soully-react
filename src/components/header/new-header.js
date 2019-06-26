import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../../assets/img/logo_soully.png";
import '../../css/new-header.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(
    faBars
)

class HeaderR extends React.Component{
    clicked(){
        var a=document.getElementsByTagName('nav')[0];
        a.classList.toggle('active');


    }
    render() {
        return(
            <header>
                <div className="logo">
                <img src= {logo} />
                </div>
                <nav >
                   
                    <ul>
                       
                    <li >
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
                            
                            <li><Link to="/Guest">Log out</Link></li>
                       
                    </ul>
                    
                    
                </nav>
               
                
                <div className="menu-toogle" onClick={this.clicked}>
                <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
                </div>
            </header>
        )
    }

}
export default HeaderR;