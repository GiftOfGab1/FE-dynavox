import React from 'react'
import './Phrase.css';


function Phrase(props) {
    const { categoryName } = props
    return (
        <section className='phrase-container'>
            <img className='phrase' src='' alt='' />
            <p>{categoryName}</p>
        </section>
    )
}

export default Phrase