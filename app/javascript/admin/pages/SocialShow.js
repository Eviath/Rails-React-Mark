import React from "react";
import './Socials.css'

class SocialShow extends React.Component {

    state = {
        social: {}
    };

    componentDidMount () {
        const { id } = this.props.match.params;

        fetch(`/v1/social/${id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({ social: response.social } )
            })



    }


    render () {


        return (
            <div className={'socials-page'}>
                {this.state.social.pagename}
            </div>
        );
    }
}

export default SocialShow
