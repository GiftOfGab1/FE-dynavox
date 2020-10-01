import React from 'react'
import { connect } from "react-redux"
import { store } from '../../index'
import './PhrasePage.css';
import usePhrasePage from './usePhrasePage';
import { Link } from 'react-router-dom'
import Button from '../Button/Button'


function PhrasePage(props) {

  const { name, id } = props
  const { socialSettings } = props.AppState
  const relatedPhrases = usePhrasePage(id, name, socialSettings)
  
  return (
    <section 
      className='back-button-container'
    >   
      <section className='sub-category-page-container'>
      <Link
        key={'Back'}
        to={'/'}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Button name={'Back'} />
      </Link>
      </section>
    <section className="phrases-container" >
      {relatedPhrases}
      <section className='add-phrase-container'>
        <section className='add-phrase-button'>
          <Link
              key={name}
              id={'id'}
              to={`/addPhrase/${name}/${id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              ><section><span role='img' aria-label='add a phrase'>➕</span></section>
          </Link>
        </section>
        <p>Add Phrase</p>
        </section>
      </section>
    </section>
  )
}

const mapStateToProps = () => {
    return store.getState()
}
export default connect(mapStateToProps)(PhrasePage);
