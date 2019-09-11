import React from "react";
import './Resource.css'
import ResourceEvent from "./ResourceEvent";

class Resource extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <tr className={'dashboard__resource'}>
                {this.props.keys.map( key =>  {
                   return <td key={key}>{this.props.item[key]}</td>
                })}
                <td>
                    <ResourceEvent resource={'socials'} resourceId={this.props.item.id} event_type={'SHOW'}/>
                    <ResourceEvent resource={'socials'} resourceId={this.props.item.id} event_type={'EDIT'}/>
                    <ResourceEvent resource={'socials'} resourceId={this.props.item.id} event_type={'DELETE'}/>
                </td>

            </tr>
        );
    }
}

export default Resource
