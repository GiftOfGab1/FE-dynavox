import React from 'react'
import { Link } from 'react-router-dom'
import SubCategory from '../SubCategory/subCategory'
import './MainPage.css';
import bankImage from '../../Assets/SocialSettings/bank.png'
import partyImage from '../../Assets/SocialSettings/party.png'

function MainPage() {
return (
    <section className='main-page-container'>
      <div className='glass'>
        <Link to="/phrases-page" style={{ textDecoration: 'none', color: 'inherit' }}>
            <SubCategory 
              categoryName={'Bank'}
              img={bankImage}
            />
        </Link>
        <SubCategory 
          categoryName={'Party'}
          img={partyImage}
        />
      </div>
    </section>
)
}

export default MainPage