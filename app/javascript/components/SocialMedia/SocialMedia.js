import React from "react";
import './SocialMedia.css'
import SocialButton from "./SocialButton";

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { fetchSocials } from '../../actions/socialActions'


class SocialMedia extends React.Component {

    componentDidMount() {
        this.props.fetchSocials();
    }

    render () {
        const { error, loading, socials } = this.props;

        function socialFormat() {
            if (error) {
                return <div>Error! {error.message}</div>;
            }

            if (loading) {
                return <div>Loading...</div>;
            }

            return  (
                socials.map((social) => {
                    return (
                        <SocialButton imageUrl={social.imageurl} pageUrl={social.pageurl} pageName={social.pagename} />
                    )
                })
            );
        }

        return (
            <div className={'social_media'}>
                <span>SOCIAL MEDIA</span>
                <hr/>
                <div className={'social_media__buttons'}>
                    { socialFormat() }
                </div>
            </div>
        );
    }
}

const structuredSelector = createStructuredSelector({
    socials: state => state.socials
});

const mapDispatchToProps = { fetchSocials };

export default connect(structuredSelector, mapDispatchToProps)(SocialMedia);


