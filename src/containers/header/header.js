import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { userActions } from '../../actions';
import logo from "../../assets/img/logo_soully.png";
import '../../css/header.css'

library.add(
    faBars
)

class Header extends React.Component {

    clicked() {
        var a = document.getElementsByTagName('nav')[0];
        a.classList.toggle('active');
    }

    render() {
        let headerShow;
        if (this.props.loggedIn === true) {
            headerShow = <header className="logged">
                <div className="logo">
                    <Link to="/home"><img src={logo} alt=''/></Link>
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
                        <li>
                            <p className="logout">
                                <Link to="/login" onClick={(event) => this.props.dispatch(userActions.logout())}>Log out</Link>
                            </p>
                        </li>
                    </ul>
                </nav>
                <div className="menu-toogle" onClick={this.clicked}>
                    <FontAwesomeIcon icon={faBars}> </FontAwesomeIcon>
                </div>
            </header>
        }
        else {
            headerShow = <header className="unLogged">
                <div className="logo">
                    <Link to="/"> <img src={logo} alt=''/> </Link>
                </div>
                <nav>
                    <p className="logIn"><Link to="/login">Log in</Link></p>
                </nav>
            </header>
        }
        return (
            <span>
                {headerShow}
            </span>
        )
    }

}
const mapStateToProps = (state) => {

    return {
        loggedIn: state.authentication.loggedIn

    }
}
export default connect(mapStateToProps)(Header);