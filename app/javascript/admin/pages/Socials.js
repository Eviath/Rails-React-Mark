import React from "react";
import './Socials.css'

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { fetchSocials } from '../../actions/socialActions'
import Resource from "../resources/Resource";
import {Link} from "react-router-dom";

class Socials extends React.Component {

    componentDidMount() {
        this.props.fetchSocials();
    }

    render () {

        const { error, loading, socials } = this.props;
        const keys = ['id', 'pagename', 'pageurl', 'imageurl', 'created_at'];

        function socialFormat() {
            if (error) {
                return <div>Error! {error}</div>;
            }

            if (loading) {
                return <div>Loading...</div>;
            }

            return  (
                socials.map((social) => {
                    return (
                        <Resource key={social.id} item={social} keys={keys}/>
                    )
                })
            );
        }

        return (
            <div className={'socials-page'}>
                <Link to={'/admin/social/new'}>New social</Link>
                <table className={'dashboard__resource_table'}>
                    <tbody>
                    <tr>{keys.map(key => <td key={key}>{key}</td>)}<td>Actions</td></tr>
                {socialFormat()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const structuredSelector = createStructuredSelector({
    socials: state => state.social.socials
});

const mapDispatchToProps = { fetchSocials };

export default connect(structuredSelector, mapDispatchToProps)(Socials);

