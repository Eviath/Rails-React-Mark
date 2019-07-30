import React from "react";
import './SideNav.css'
import { NavLink } from 'react-router-dom';

import SocialsIcon from 'images/network.svg'

class SideNav extends React.Component {
    render () {
        return (
            <div className={'dashboard__sidenav'}>
                <NavLink to={'/admin/socials'} className={'sidenav__btn'}><span className={'btn__text'}>Socials</span><img alt={'socialsIcon'} src={SocialsIcon}/></NavLink>
            </div>
        );
    }
}

export default SideNav
