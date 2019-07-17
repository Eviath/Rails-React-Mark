import React from "react";
import './Header.css'
import Button from "../Navigation/Button";

class Header extends React.Component {
    render () {
        return (
            <div className={'header_name'}>
                <h1>MARK <br/> WILDROAD</h1>
                <p>WEB DEVELOPER & GRAPHICS DESIGNER</p>
                <Button path={'/about'} text={'ABOUT ME'} classes={'navigation_button--white'} />
            </div>
        );
    }
}

export default Header
