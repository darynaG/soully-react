import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { userActions } from '../../actions/index'

import '../../css/login.css'

import llama from '../../assets/img/lama_green.png'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to={'/home'} />;
        }
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="login">
                <div className="content">
                    <div className="leftSide">
                        <div className="headerImg">
                            <img src={llama} alt=''></img>
                        </div>
                        <div className="account">
                            <h5>Do not have an account?</h5>
                            <Link to="/register" className="btn-link">Create a free account</Link>
                        </div>
                    </div>
                    <div className="rightSide">
                        <h1>Log In</h1>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="username">
                                <label htmlFor="username">Username</label>
                                <div className="inp">
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="help-block">!</div>
                                    }
                                </div>
                            </div>

                            <div className="username">
                                <label htmlFor="password">Password</label>
                                <div className="inp">
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="help-block">!</div>
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn">Log in</button>
                                {loggingIn

                                }

                            </div>
                            <div className="account">
                            <Link to="/register" className="btn-link">Create a free account</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, loggedIn } = state.authentication;

    return {
        loggingIn, loggedIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 