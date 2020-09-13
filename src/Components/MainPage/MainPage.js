import React from 'react'
// import { Link } from 'react-router-dom'
import './MainPage.css';
import useMainPage from './useMainPage'
import { connect } from "react-redux"
import { store } from '../../index'
import PropTypes from 'prop-types';


import BankImage from '../../Assets/SocialSettings/Bank.png'
import PartyImage from '../../Assets/SocialSettings/Party.png'
import { useSelector } from "react-redux";

// import store from '../../Store/Reducers';


function MainPage(props) {
    const { socialSettings } = props.AppState
    const subCategories = useMainPage(socialSettings)  
    return (
        <section className='main-page-container'>
                {subCategories}
        </section>
    )
}
const mapStateToProps = () => {
    return store.getState()
}

MainPage.propTypes = {
  AppState: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(MainPage);

