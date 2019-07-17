import React from "react";
import './Navigation.css'

class Button extends React.Component {
    render () {
        return (
            <a href={this.props.path} className={this.props.classes}>{this.props.text}</a>
        );
    }
}

export default Button
