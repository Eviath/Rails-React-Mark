import React from "react";
import './Socials.css'
import {Redirect} from 'react-router-dom'

class SocialCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            social: {
                pagename: '',
                pageurl: '',
                imageurl: '',
            },
            responseUrl: '',
        };
        this.handlePageNameChange = this.handlePageNameChange.bind(this);
        this.handlePageUrlChange = this.handlePageUrlChange.bind(this);
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
        this.createSocial = this.createSocial.bind(this);
    }

    handlePageNameChange(e) {
        this.setState({ social: { ...this.state.social, pagename: e.target.value }});
    }

    handlePageUrlChange(e) {
        this.setState({ social: {...this.state.social, pageurl: e.target.value }});
    }

    handleImageUrlChange(e) {
        this.setState({ social: {...this.state.social, imageurl: e.target.value }});
    }

    createSocial() {
        const token = document.querySelector('meta[name="csrf-token"]');
        fetch(`/admin/socials`, {
            method: 'POST',
            body:  JSON.stringify(this.state.social),
            headers: {
                'X-CSRF-Token': token.content,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            this.setState({responseUrl: response.url})
        })
    }


    render() {

        if(this.state.responseUrl) {
            return( <Redirect to="/admin/socials"/> )
        }

        return (

            <div className={'socials-page'}>
                <label>Page NAME</label>
                <input
                    type="text"
                    name="social[pagename]"
                    value={this.state.social.pagename}
                    onChange={this.handlePageNameChange}
                />

                <label>Page URL</label>
                <input
                    type="text"
                    name="social[pageurl]"
                    value={this.state.social.pageurl}
                    onChange={this.handlePageUrlChange}
                />

                <label>Image URL</label>
                <input
                    type="text"
                    name="social[imageurl]"
                    value={this.state.social.imageurl}
                    onChange={this.handleImageUrlChange}
                />

                <input type="submit" value="Create Social" onClick={this.createSocial} />
            </div>
        );
    }

}

export default SocialCreate
