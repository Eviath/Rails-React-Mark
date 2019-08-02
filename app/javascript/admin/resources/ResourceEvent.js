import React from "react";
import {Redirect} from 'react-router-dom'


class ResourceEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: '',
            responseUrl: '',
        };
        this.redirectResource = this.redirectResource.bind(this);
        this.deleteResource = this.deleteResource.bind(this);
    }

    redirectResource(action) {
        return this.setState({ navigate: action })
    }


    deleteResource(resource, resourceId) {
        console.log('delete action called');
        const token = document.querySelector('meta[name="csrf-token"]');
        fetch(`/admin/${resource}/` + resourceId, {
            method: 'DELETE',
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
            return( <Redirect to={`/admin/${this.props.resource}`}/> )
        }

        if(this.state.navigate === 'SHOW') {
            return <Redirect to={`/admin/${this.props.resource}/${this.props.resourceId}`} push={true} />
        }

        if(this.state.navigate === 'EDIT') {
            return <Redirect to={`/admin/${this.props.resource}/${this.props.resourceId}/edit`} push={true} />
        }


        if(this.props.event_type === 'SHOW' || 'EDIT') {
            return (
                <a className={this.props.event_type} onClick={() => this.redirectResource(this.props.event_type)}>
                    {this.props.event_type}
                </a>)
        }

       if(this.props.event_type === 'DELETE') {
           return (
               <a className="delete" onClick={() => this.deleteResource(this.props.resource, this.props.resourceId)}>
                   DELETE
               </a>
           )
        }

    }

}

export default ResourceEvent
