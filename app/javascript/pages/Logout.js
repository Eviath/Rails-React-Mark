import React from "react";

class Logout extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            page: null
        }
    }
    handleLogout(e) {
        e.preventDefault();
        const token = document.querySelector('meta[name="csrf-token"]');
        return fetch(`/users/sign_out`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-Token': token.content,
                'Content-Type': 'application/json'
            }
        }).then(response => this.setState({page: '/'}));
    }
    render() {
        if(this.state.page) {
            return (
               { redirect: window.location.replace(this.state.page)}
            )
        }

        return (
            <a onClick={this.handleLogout}>Sign Out</a>
        );
    };
}

export default Logout
