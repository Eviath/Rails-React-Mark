import React from "react";
import './Socials.css'
import {Redirect} from 'react-router-dom'
import ResourceForm from "../resources/ResourceForm";

class SocialEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            social: {
                id: '',
                pagename: '',
                pageurl: '',
                imageurl: '',
                created_at: '',
                updated_at: ''
            },
            responseUrl: '',
            id: ''
        };
        this.handlePageNameChange = this.handlePageNameChange.bind(this);
        this.handlePageUrlChange = this.handlePageUrlChange.bind(this);
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
        this.updateSocial = this.updateSocial.bind(this);
    }

    handlePageNameChange(e) {
        this.setState({ social: {pagename: e.target.value }});
    }

    handlePageUrlChange(e) {
        this.setState({ social: {pageurl: e.target.value }});
    }

    handleImageUrlChange(e) {
        this.setState({ social: {imageurl: e.target.value }});
    }

    updateSocial() {
        const token = document.querySelector('meta[name="csrf-token"]');
        const id = this.state.id;
         fetch(`/admin/socials/` + id, {
            method: 'PATCH',
            body:  JSON.stringify(this.state.social),
            headers: {
                'X-CSRF-Token': token.content,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            this.setState({responseUrl: response.url})
         })
    }

    componentDidMount () {
        const { id } = this.props.match.params;

        fetch(`/v1/social/${id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({ social: response.social } );
                this.setState({ id: response.social.id } );
            })
    }


    render() {

        if(this.state.responseUrl) {
           return( <Redirect to="/admin/socials"/> )
        }

        return (
            <ResourceForm
                action={'edit'}
                resource={'socials'}
                handlePageNameChange={this.handlePageNameChange}
                handlePageUrlChange={ this.handlePageUrlChange}
                handleImageUrlChange={ this.handleImageUrlChange}
                response={this.state.responseUrl}
                pagename={this.state.social.pagename}
                pageurl={this.state.social.pageurl}
                imageurl={this.state.social.imageurl}
                event={this.updateSocial}/>
        );
    }

}

export default SocialEdit
