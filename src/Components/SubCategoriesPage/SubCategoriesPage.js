import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { store } from '../../index'
import useSubCategoriesPage from './useSubCategoriesPage';
import Button from '../Button/Button'


function SubCategoriesPage(props) {
    const { name } = props
    const { socialSettings } = props.AppState
    const relatedPhrases = useSubCategoriesPage(name, socialSettings)
    


    return (
      <>
        <section className='sub-category-page-container'>
          <Link
              key={'Back'}
              to={'/'}
              style={{ textDecoration: 'none', color: 'inherit' }}
          >
          <Button name={'Back'} />
          </Link>
        </section>
        <section
          className='phrase-page-container'
          onClick={(e) => {
          }}
        >
          {relatedPhrases && relatedPhrases}
        </section>
      </>
    )
}

const mapStateToProps = () => {
    return store.getState()
}
export default connect(mapStateToProps)(SubCategoriesPage);