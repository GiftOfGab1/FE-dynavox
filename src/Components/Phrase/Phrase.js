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
  console.log('props',props, User.voice, User.speed)


  // const dispatch = useDispatch();
  // const isPlaying = useSelector((state) => state.isPlaying)
  // const togglePlay = async (phraseInput, voice, voiceSpeed) => {
  //   const data = await handleTextToSpeech(phraseInput, voice, voiceSpeed);
  //   const audio = new Audio(data);

  //   if(isPlaying) {
  //     audio.pause();
  //     audio.currentTime = 0;
  //     return dispatch(stopPlay(), isPlaying)
  //   } else {
  //     audio.play();
  //     return dispatch(startPlay(), isPlaying) && dispatch(stopPlay(), isPlaying)
  //   }
  // };

    // const { phraseName } = props
  

    return (
        <section className='phrase-container'
        >
            <Emoji
              // label={expression}
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