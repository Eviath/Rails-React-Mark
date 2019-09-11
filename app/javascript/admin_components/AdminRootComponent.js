import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {connect} from 'react-redux'

import {createStructuredSelector} from "reselect";
import {fetchUser} from "../actions/globalActions";
import Header from "./dashboard/Header";
import SideNav from "./dashboard/SideNav";
import Dashboard from "../admin/pages/Dashboard";
import Socials from "../admin/pages/Socials";
import SocialShow from "../admin/pages/SocialShow";
import SocialEdit from "../admin/pages/SocialEdit";
import SocialCreate from "../admin/pages/SocialCreate";

class AdminRootComponent extends React.Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    render () {
        return (
            <BrowserRouter>
                <Header user={this.props.user}/>
                <SideNav/>
                <Switch>
                    <Route exact path="/admin" component={Dashboard} />
                    <Route exact path="/admin/socials" component={Socials} />
                    <Route exact path='/admin/socials/:id' component={SocialShow} />
                    <Route exact path='/admin/socials/:id/edit' component={SocialEdit} />
                    <Route exact path='/admin/social/new' component={SocialCreate} />
                </Switch>
            </BrowserRouter>
        );
    }
}


const structuredSelector = createStructuredSelector({
    user: state => state.global.user
});

const mapDispatchToProps = { fetchUser };

export default connect(structuredSelector, mapDispatchToProps)(AdminRootComponent);


