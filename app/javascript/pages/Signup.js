import React from "react";
import './Login.css'
import {fetchUser} from "../actions/globalActions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import { Redirect }from "react-router-dom";

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                password_confirmation: ''
            },
            error: [],
            page: null
        };
        this.handleSignup = this.handleSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value }});
    }


    handleSignup(e) {
        e.preventDefault();
        const token = document.querySelector('meta[name="csrf-token"]');
        return fetch(`/users/`, {
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
                this.setState({page: '/login'})
            }})
            .catch(error => console.log(error));
    }


    render() {

        if(this.props.user && this.props.user.email) {
            return (
                { redirect: window.location.replace(this.state.page)}
            )
        }

        if (this.state.page) {
            return <Redirect to={this.state.page}/>
        }


        return (
            <div className={'login-form-wrapper'}>
                {this.state.error}
                <h2>Signup</h2>
                <form className={'login-form'}>
                    <input name="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                    <input name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                    <input name="password_confirmation" id="password_confirmation" placeholder="Repeat Password" onChange={this.handleChange}/>
                    <button onClick={this.handleSignup}>Submit</button>
                </form>
                <a onClick={() => this.setState({page: "/login"})}>Login</a>
                <a onClick={() => this.setState({page: "/"})}>Homepage</a>
            </div>
        );
    };
};

const structuredSelector = createStructuredSelector({
    user: state => state.global.user
});

const mapDispatchToProps = { fetchUser };

export default connect(structuredSelector, mapDispatchToProps)(Signup);


