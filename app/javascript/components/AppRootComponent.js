import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {connect} from 'react-redux'
import Home from '../pages/Home'

import {createStructuredSelector} from "reselect";
import {fetchUser} from "../actions/globalActions";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

class AppRootComponent extends React.Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </BrowserRouter>
        );
    }
}


const structuredSelector = createStructuredSelector({
    user: state => state.global.user
});

const mapDispatchToProps = { fetchUser };

export default connect(structuredSelector, mapDispatchToProps)(AppRootComponent);


