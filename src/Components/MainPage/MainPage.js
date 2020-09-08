import React from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css';
import SubCategory from '../SubCategory/subCategory'


function MainPage() {
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