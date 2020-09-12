import React from 'react'
import { Link } from 'react-router-dom'
import SubCategory from '../SubCategory/subCategory'
import './MainPage.css';
import useMainPage from './useMainPage'
// import store from '../..//Store/Reducers';


function MainPage() {
    useMainPage()
    // console.log(store);
    

    return (
        <section className='main-page-container'>
            <Link to="/phrases-page" style={{ textDecoration: 'none', color: 'inherit' }}>
                <SubCategory categoryName={'Bank'}/>
            </Link>
                <SubCategory categoryName={'Grocery Store'}/>
        </section>
    )
}

export default MainPage