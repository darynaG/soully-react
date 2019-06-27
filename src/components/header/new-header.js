import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux'
import { userActions } from '../../actions/index';

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
        let headerShow;
        if (this.props.loggedIn === true)
        {
            headerShow = <header className="logged">
            <div className="logo">
            <Link to="/">
        <img src= {logo} />
        </Link>
        </div>
        <nav>
           
            <ul>
               <p className="list">
            <li >
                    <Link to="/home">Home</Link>
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
                    </p>
                    <p className="logout">
                    <a href="#" onClick={(event)=>this.props.dispatch(userActions.logout())}>Log out</a>
                      </p>   
            </ul>
             
        </nav>
       
        
        <div className="menu-toogle" onClick={this.clicked}>
        <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
        </div>
        </header>
        }
        else{
            headerShow = <header className="unLogged">
            <div className="logo">
            <Link to="/">
        <img src= {logo} />
        </Link>
        </div>
        <nav>               
            <p className="logIn"><Link to="/login">Log in</Link></p>

        </nav>
       
        
        <div className="menu-toogle" onClick={this.clicked}>
        <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
        </div>
        </header>
        }
        return(
            <span>
                {headerShow}
              </span>
            
        )
    }

}
const mapStateToProps = (state) => {  
    
   return {
    loggedIn : state.authentication.loggedIn
   
   }
  }
export default connect(mapStateToProps)(HeaderR);