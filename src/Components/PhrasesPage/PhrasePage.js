import React from 'react'
import { connect } from "react-redux"
import { store } from '../../index'
import './PhrasePage.css';
import usePhrasePage from './usePhrasePage';
import { Link } from 'react-router-dom'
import AddPhraseForm from '../AddPhraseForm/AddPhrase'


function PhrasePage(props) {

    const { name, id } = props
    const { socialSettings } = props.AppState
    const relatedPhrases = usePhrasePage(id, name, socialSettings)
    console.log(relatedPhrases);
    
    return (
        <section 
        className='phrase-page-container'
        onClick={(e) => {
            console.log(e.target);
        }}
        >   
        {relatedPhrases}
          <section className='add-phrase-container'>
            <section className='add-phrase-button'>
              <Link
                  key={'name'}
                  id={'id'}
                  to={`/addPhrase/${id}/${name}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
              ><section> ➕ add phrase </section>
                  {/* <AddPhraseForm  name={name}  id={id}  /> */}
              </Link>
            </section>
          </section>
        </section>
    )
}

const mapStateToProps = () => {
    return store.getState()
}
export default connect(mapStateToProps)(PhrasePage);
