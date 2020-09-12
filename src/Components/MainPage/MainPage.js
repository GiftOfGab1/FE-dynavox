import React from 'react'
// import { Link } from 'react-router-dom'
import SubCategory from '../SubCategory/subCategory'
import './MainPage.css';
import useMainPage from './useMainPage'
import { connect } from "react-redux"
import { store } from '../../index'


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

