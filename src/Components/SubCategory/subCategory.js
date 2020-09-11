import React from 'react'
import './subCategory.css';
import BankImage from '../../Assets/SocialSettings/Bank.png'
// import PartyImage from '../../Assets/SocialSettings/Party.png'
import { Emoji } from '../Emoji/Emoji'
// import "../Emoji/Emoji.css"


function SubCategory(props) {
  const { categoryName, img } = props
  console.log(img)
    return(
        <section className='sub-category-container'>
        <Emoji />
            <p>{ categoryName }</p>
        </section>

    )
}

export default SubCategory