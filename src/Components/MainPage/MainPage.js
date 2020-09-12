import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import './MainPage.css';
import SubCategory from '../SubCategory/subCategory'

import bankImage from '../../Assets/SocialSettings/bank.png'
import partyImage from '../../Assets/SocialSettings/party.png'
=======
// import { Link } from 'react-router-dom'
import './MainPage.css';
import useMainPage from './useMainPage'
import { connect } from "react-redux"
import { store } from '../../index'

>>>>>>> 2ee88aff610e8b98914f7d8ea13020878d46192a
// import BankImage from '../../Assets/SocialSettings/Bank.png'
// import PartyImage from '../../Assets/SocialSettings/Party.png'
// import { useSelector } from "react-redux";

// import store from '../..//Store/Reducers';


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

export default connect(mapStateToProps)(MainPage);

