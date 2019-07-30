import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Provider } from 'react-redux'

// Import pages and components
import Dashboard from '../admin/pages/Dashboard'
import Socials from '../admin/pages/Socials'
import SocialShow from '../admin/pages/SocialShow'
import SocialEdit from '../admin/pages/SocialEdit'
import SocialCreate from '../admin/pages/SocialCreate'
import Header from "../admin_components/dashboard/Header";
import SideNav from "./dashboard/SideNav";

// Import store
import configureStore from '../configureStore'
const store = configureStore();

class Admin extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <SideNav/>
                    <Switch>
                        <Route exact path="/admin" component={Dashboard} />
                        <Route exact path="/admin/socials" component={Socials} />
                        <Route exact path='/admin/socials/:id' component={SocialShow} />
                        <Route exact path='/admin/socials/:id/edit' component={SocialEdit} />
                        <Route exact path='/admin/social/new' component={SocialCreate} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Admin
