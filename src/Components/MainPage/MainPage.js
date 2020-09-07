import React from 'react'
import SubCategory from '../SubCategory/subCategory'
import './MainPage.css';


function MainPage() {
return (
    <section className='main-page-container'>
        <SubCategory categoryName={'Bank'}/>
        <SubCategory categoryName={'Grocery Store'}/>
    </section>
)
}

export default MainPage