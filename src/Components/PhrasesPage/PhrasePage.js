import React from 'react'
import { connect } from "react-redux"
import { store } from '../../index'
import './PhrasePage.css';
import usePhrasePage from './usePhrasePage';


function PhrasePage(props) {

    const { name, id } = props
    const { socialSettings } = props.AppState
    const relatedPhrases = usePhrasePage(id, name, socialSettings)
    
    return (
        <section 
        className='phrase-page-container'
        >   
        {relatedPhrases}
        </section>
    )
}

const mapStateToProps = () => {
    return store.getState()
}
export default connect(mapStateToProps)(PhrasePage);
