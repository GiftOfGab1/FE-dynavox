import React from 'react'
import './MainPage.css'
import useMainPage from './useMainPage'
import { connect } from "react-redux"
import { store } from '../../index'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";



function MainPage(props) { 
    const { socialSettings } = props.AppState
    const subCategories = useMainPage(socialSettings)  

    return (
        <section className='main-page-container'>
            <section className='social-setting-container'>
                {subCategories}
            <section className='add-phrase-container'>
                <section className='add-phrase-button'>
                    <Link
                        key='add phrase'
                        id={'id'}
                        to={`/addSocialSetting`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    ><section><span role='img' aria-label='add a phrase'>➕</span></section>
                    </Link>
                </section>
                <p>Add A Subcategory</p>
            </section>
            </section>
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