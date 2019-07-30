import React from "react";
import './Breadcrumb.css'

class Breadcrumb extends React.Component {
    render () {
        return (
            <div className={'dashboard__breadcrumb'}>
                {this.props.location}
            </div>
        );
    }
}

export default Breadcrumb
