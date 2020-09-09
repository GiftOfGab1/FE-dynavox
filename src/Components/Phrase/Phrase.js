import React from 'react'
import './Phrase.css';


function Phrase(props) {
    const { phraseName } = props
    return (
        <section className='phrase-container'>
            <img className='phrase' src='' alt='' />
            <p>{phraseName}</p>
        </section>
    )
}

export default Phrase