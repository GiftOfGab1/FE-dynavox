import React from 'react'
import './subCategory.css';
import BankImage from '../../Assets/SocialSettings/Bank.png'
import PartyImage from '../../Assets/SocialSettings/Party.png'



function SubCategory(props) {
  const { categoryName, img } = props
  console.log(img)
    return(
        <section className='sub-category-container'>
            <img className='sub-category-image' src={BankImage} alt=''/>
            <p>{ categoryName }</p>
        </section>

    )
}

export default SubCategory