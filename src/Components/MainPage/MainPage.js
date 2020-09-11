import React from 'react'
import { Link } from 'react-router-dom'
import SubCategory from '../SubCategory/subCategory'
import './MainPage.css';
// import BankImage from '../../Assets/SocialSettings/Bank.png'
// import PartyImage from '../../Assets/SocialSettings/Party.png'
// import { useSelector } from "react-redux";

function MainPage(props) {
  const { socialSettings } = props


    const subCategories = socialSettings && socialSettings.map(category => {
      console.log(category.title)
      return (
        <Link to="/phrases-page" style={{ textDecoration: 'none', color: 'inherit' }}>
          <SubCategory 
          categoryName={category.title}
          img={category.title}
          phrases={category.phrases}
        /></Link>
      )
    })

  return (
    <section className='main-page-container'>
      {subCategories}
        {/* <Link to="/phrases-page" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SubCategory 
              categoryName={'Bank'}
              img={bankImage}
            />
        </Link>
        <SubCategory 
          categoryName={'Party'}
          img={partyImage}
        /> */}
    </section>
  )
}

export default MainPage