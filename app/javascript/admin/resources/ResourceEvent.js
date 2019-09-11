import React from "react";
import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { deleteSocials } from '../../actions/socialActions'

class ResourceEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navigate: '',
            responseUrl: '',
        };
        this.redirectResource = this.redirectResource.bind(this);
        this.deleteResource = this.deleteResource.bind(this);
        this.formatEvent = this.formatEvent.bind(this);
    }

    redirectResource(action) {
        return this.setState({ navigate: action, responseUrl: '' })
    }

    deleteResource(resourceId) {
        this.props.deleteSocials(resourceId);
    }

    formatEvent() {
        if(this.props.event_type === 'SHOW') {
            return (
                <a className={this.props.event_type} onClick={() => this.redirectResource(this.props.event_type)}>
                    {this.props.event_type}
                </a>
            )
        }

      if(this.props.event_type === 'EDIT') {
          return (
              <a className={this.props.event_type} onClick={() => this.redirectResource(this.props.event_type)}>
                  {this.props.event_type}
              </a>
          )
        }

      if(this.props.event_type === 'DELETE') {
          return (
              <a className="delete" onClick={() => this.deleteResource(this.props.resourceId)}>
                  DELETE
              </a> )
        }

      return (
          'Event type not recognized'
      )
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

        return (
            this.formatEvent()
        )

    }
}

const structuredSelector = createStructuredSelector({
    socials: state => state.socials
});

const mapDispatchToProps = { deleteSocials };

export default connect(structuredSelector, mapDispatchToProps)(ResourceEvent);

