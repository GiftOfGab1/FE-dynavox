import React from 'react'
import './SubCategory.css';


function SubCategory(props) {
    const { categoryName } = props
    return(
        <section className='sub-category-container'>
            <img className='sub-category-image' src='' alt=''/>
            <p>{ categoryName }</p>
        </section>
    )
}

export default SubCategory