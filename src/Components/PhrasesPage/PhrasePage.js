import React from 'react'
import Phrase from '../Phrase/Phrase'
import './PhrasePage.css';


function PhrasePage() {
    return (
        <section className='phrase-page-container'>
            <Phrase phraseName={'Hi'} />
            <Phrase phraseName={'Yo'} />
            <Phrase phraseName={'Sup'} />
            <Phrase phraseName={'Hey'} />
            <Phrase phraseName={'Howdy'} />
            <Phrase phraseName={"What's poppin"} />
            <Phrase phraseName={"What's good?"} />
        </section>
    )
}

export default PhrasePage