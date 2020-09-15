import React from 'react'
import './Phrase.css';
import Emoji from '../Emoji/Emoji'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'


function Phrase(props) {

  const { expression } = props.categoryName
  const User = useSelector(state => state.AppState.userDetails)

    return (
        <section className='phrase-container'
        >
            <Emoji
              phraseName={expression} 
              label={expression}
              voice={User.voice}
              speed={User.speed}
            />
            <p>{expression}</p>
        </section>
    )
}

Phrase.propTypes = {
  phraseName: PropTypes.string.isRequired
}

export default Phrase