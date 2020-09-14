import React from 'react'
import './subCategory.css'
import { Link } from 'react-router-dom'
// import BankImage from '../../Assets/SocialSettings/Bank.png'
// import PartyImage from '../../Assets/SocialSettings/Party.png'
import Emoji from '../Emoji/Emoji'
// import "../Emoji/Emoji.css"


function SubCategory(props) {
    const { categoryName, phrases} = props    

    return(
        <section className='sub-category-container'>
                <Emoji 
                    className="sub-category-emoji"
                    name={ categoryName }
                    id={phrases}
                />
                <h4>{ categoryName }</h4>
        </section>

    )
}

export default SubCategory