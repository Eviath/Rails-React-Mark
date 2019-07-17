import React from "react";
import Header from "../components/Header/Header";
import './Home.css'
import SocialMedia from "../components/SocialMedia/SocialMedia";
import Button from "../components/Navigation/Button";

class Home extends React.Component {
    render () {
        return (
            <div className={'homepage'}>
                <div className={'homepage_navigation'}>
                    <Button path={'/'} text={'MY WORK'} classes={'navigation_button'} />
                    <Button path={'/contact'} text={'CONTACT'} classes={'navigation_button'} />
                </div>
                <Header/>
                <SocialMedia/>
            </div>
        );
    }
}

export default Home
