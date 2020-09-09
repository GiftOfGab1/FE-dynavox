import React from 'react'
import Phrase from '../Phrase/Phrase'
import './PhrasePage.css';


function PhrasePage() {
    return (
        <section className='phrase-page-container'>
            <Phrase className='phrase' phraseName={'Hi'} />
            <Phrase className='phrase' phraseName={'Yo'} />
            <Phrase className='phrase' phraseName={'Sup'} />
            <Phrase className='phrase' phraseName={'Hey'} />
            
        </section>
    )
}

export default PhrasePage