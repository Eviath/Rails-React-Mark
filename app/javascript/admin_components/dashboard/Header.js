import React from "react";
import './Header.css'
import { NavLink } from 'react-router-dom';
import Logout from "../../pages/Logout";

class Header extends React.Component {
    render () {
        return (
            <div className={'dashboard__header'}>
                <div className={'header__logo'}><h2>LOGO</h2></div>
                <div className={'header__navigation'}>
                    <NavLink to="/admin">Dashboard</NavLink>
                    <a href={'/'}>Homepage</a>
                </div>

                <div className={'header__meta'}>
                    <p>Notifications</p>
                    <p>{this.props.user ? this.props.user.email : 'Not logged in'}</p>
                    <Logout/>
                </div>
            </div>
        );
    }
}

export default Header
