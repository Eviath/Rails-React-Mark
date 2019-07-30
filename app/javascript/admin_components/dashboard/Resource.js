import React from "react";
import './Resource.css'
import SocialShow from "../../admin/pages/SocialShow";
import { Link } from 'react-router-dom';

class Resource extends React.Component {

    render () {
        return (
            <tr className={'dashboard__resource'}>
                {this.props.keys.map( key =>  {
                   return <td key={key}>{this.props.item[key]}</td>
                })}
                <td>
                    <Link to={`/admin/socials/${this.props.item.id}`}> SHOW </Link>
                    <Link to={`/admin/socials/${this.props.item.id}/edit`}> EDIT </Link>
                </td>

            </tr>
        );
    }
}

export default Resource
