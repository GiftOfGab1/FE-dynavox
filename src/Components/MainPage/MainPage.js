import React from 'react'
import SubCategory from '../SubCategory/SubCategory'
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