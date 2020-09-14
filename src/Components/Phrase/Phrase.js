import React from 'react'
import './Phrase.css';
import Emoji from '../Emoji/Emoji'

import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay } from '../../Store/Actions';


function Phrase(props) {
  const { expression } = props.categoryName

  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.isPlaying)
  const togglePlay = async (phraseInput, voice, voiceSpeed) => {
    const data = await handleTextToSpeech(phraseInput, voice, voiceSpeed);
    const audio = new Audio(data);

    if(isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      return dispatch(stopPlay(), isPlaying)
    } else {
      audio.play();
      return dispatch(startPlay(), isPlaying) && dispatch(stopPlay(), isPlaying)
    }
  };

    // const { phraseName } = props
    return (
        <section className='phrase-container'
          onclick={togglePlay}
        >
            <Emoji 
              label={expression}
              // onClick={(e) => {
              //   console.log('hi');
              //   e.preventDefault()
              //   console.log(e.target.key)
              // }}
            />
            <p>{expression}</p>
        </section>
    )
}

export default Phrase