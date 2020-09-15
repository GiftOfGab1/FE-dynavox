import React, { useState } from 'react'
import './Phrase.css';
import Emoji from '../Emoji/Emoji'
import PropTypes from 'prop-types';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay } from '../../Store/Actions';



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