import React from "react";
import '../pages/Socials.css'
import { Redirect } from 'react-router-dom'

class ResourceForm extends React.Component {

    render() {

        if(this.props.response) {
            return( <Redirect to={`/admin/${this.props.resource}`}/> )
        }

        return (
            <div className={'socials-page'}>
                <div className={'resource-form'}>
                    <div className={'form-field'}>
                        <label>Page NAME</label><br/>
                        <input
                            type="text"
                            name="social[pagename]"
                            value={this.props.pagename}
                            onChange={this.props.handlePageNameChange}
                        />
                    </div>
                    <div className={'form-field'}>
                        <label>Page URL</label><br/>
                        <input
                            type="text"
                            name="social[pageurl]"
                            value={this.props.pageurl}
                            onChange={this.props.handlePageUrlChange}
                        />
                    </div>
                    <div className={'form-field'}>
                        <label>Image URL</label><br/>
                        <input
                            type="text"
                            name="social[imageurl]"
                            value={this.props.imageurl}
                            onChange={this.props.handleImageUrlChange}
                        />
                    </div>
                    <div className={'form-submit'}>
                        <input type="submit" value={`${this.props.action} ${this.props.resource}`} onClick={this.props.event}  />
                    </div>
                </div>
            </div>
        );
    }

}

export default ResourceForm
