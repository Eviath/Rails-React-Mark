import React from "react";
import './Login.css'
import {fetchUser} from "../actions/globalActions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import { Redirect }from "react-router-dom";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            error: [],
            page: null
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(e) {
        this.setState({ user: { ...this.state.user, email: e.target.value }});
    }

    handlePassword(e) {
        this.setState({ user: { ...this.state.user, password: e.target.value }});
    }


    handleLogin(e) {
        e.preventDefault();
        const token = document.querySelector('meta[name="csrf-token"]');
        return fetch(`/users/sign_in`, {
            method: 'POST',
            headers: {
                'X-CSRF-Token': token.content,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(json => { if(json.error) {
                this.setState({error: json.error})
            } else {
                this.props.fetchUser();
                this.setState({page: '/admin'})
            }})
            .catch(error => console.log(error));
    }


    render() {

        if(this.props.user && this.props.user.email) {
            return (
                { redirect: window.location.replace(this.state.page)}
            )
        }

        if (this.state.page && this.state.page !== '/admin') {
            return <Redirect to={this.state.page}/>
        }

        return (
            <div className={'login-form-wrapper'}>
                {this.state.error}
                <h2>Login</h2>
                <form className={'login-form'}>
                    <input id="email" placeholder="Email" onChange={this.handleEmail}/>
                    <input id="password" placeholder="Password" onChange={this.handlePassword}/>
                    <button onClick={this.handleLogin}>Submit</button>
                </form>
                <a onClick={() => this.setState({page: "/signup"})}>Signup</a>
                <a onClick={() => this.setState({page: "/"})}>Homepage</a>
            </div>
        );
    };
};

const structuredSelector = createStructuredSelector({
    user: state => state.global.user
});

const mapDispatchToProps = { fetchUser };

export default connect(structuredSelector, mapDispatchToProps)(Login);


