import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import "../../css/registration.css"
import llama from '../../assets/img/lama_green.png'

import { userActions } from '../../actions/index';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.email && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        console.log("user reg", user)
        return (
            <div className="registration">
                <div className="content">
                    <div className="leftSide">
                        <div className="headerImg">
                            <img src={llama}></img>
                        </div>
                        <div className="account">
                            <h5>Already have an account?</h5>
                            <Link to="/login" className="btn-link">Log in</Link>
                        </div>
                    </div>
                    <div className="rightSide">
                        <h3>Create a free account</h3>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="username">
                                <label htmlFor="email">Email</label>
                                <div className="inp">
                                    <input type="text" className="form-control" name="email" value={user.firstName} onChange={this.handleChange} />
                                    {submitted && !user.email &&
                                        <div className="help-block">!</div>

                                    }
                                </div>
                            </div>

                            <div className="username">
                                <label htmlFor="username">Username</label>
                                <div className="inp">
                                    <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                                    {submitted && !user.username &&
                                        <div className="help-block">!</div>
                                    }
                                </div>
                            </div>
                            <div className="username">
                                <label htmlFor="password">Password</label>
                                <div className="inp">
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                    {submitted && !user.password &&
                                        <div className="help-block">!</div>
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Register</button>
                                {registering}
                            </div>
                            <div className="account">
                            <Link to="/login" className="btn-link">Log in</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };