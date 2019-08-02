import React from "react";
import './Socials.css'
import { Redirect } from 'react-router-dom'
import ResourceForm from "../resources/ResourceForm";

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
           <ResourceForm
               action={'create'}
               resource={'socials'}
               response={this.state.responseUrl}
               pagename={this.state.social.pagename}
               handlePageNameChange={this.handlePageNameChange}
               handlePageUrlChange={ this.handlePageUrlChange}
               handleImageUrlChange={ this.handleImageUrlChange}
               pageurl={this.state.social.pageurl}
               imageurl={this.state.social.imageurl}
               event={this.createSocial}/>
        );
    }

}

export default SocialCreate
