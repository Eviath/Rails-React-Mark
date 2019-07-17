import React from "react";
import './SocialMedia.css'

class SocialButton extends React.Component {
    render () {
        return (
            <a href={this.props.pageUrl}><div className={'social_button'}><img alt={this.props.pageName + '-icon'} src={this.props.imageUrl}/></div></a>
        );
    }
}

export default SocialButton
