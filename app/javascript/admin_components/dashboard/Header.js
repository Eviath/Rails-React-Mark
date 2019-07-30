import React from "react";
import './Header.css'
import { NavLink } from 'react-router-dom';

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
                    <p>Jacek Kowalski</p>
                    <p>Log Out</p>
                </div>
            </div>
        );
    }
}

export default Header
