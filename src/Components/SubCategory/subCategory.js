import React from 'react'
import './subCategory.css'
import './subCategory.css';
import PropTypes from 'prop-types';
import Emoji from '../Emoji/Emoji'


function SubCategory(props) {
  const { categoryName, phrases} = props   

  return(
    <section className='sub-category-container'>
      <Emoji 
        image={props.image}
        className="sub-category-emoji"
        name={ categoryName }
        id={phrases}
      />
      <h4>{ categoryName }</h4>
    </section>
  )
}

SubCategory.propTypes = {
  categoryName: PropTypes.string.isRequired
}

export default SubCategory