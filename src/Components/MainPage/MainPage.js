import React from 'react'
import './MainPage.css';
import useMainPage from './useMainPage'
import { connect } from "react-redux"
import { store } from '../../index'
import PropTypes from 'prop-types';

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