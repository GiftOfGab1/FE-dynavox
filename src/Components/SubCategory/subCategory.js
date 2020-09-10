import React from 'react'
import './subCategory.css';


function SubCategory(props) {
    const { categoryName, img } = props
    return(
        <section className='sub-category-container'>
            <img className='sub-category-image' src={img} alt=''/>
            <p>{ categoryName }</p>
        </section>
    )
}

export default SubCategory