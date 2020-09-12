import React from 'react'
import './Phrase.css';
import { Emoji } from '../Emoji/Emoji'

import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay } from '../../Store/Actions';


function Phrase(props) {

  // const { phraseInput, voice, voiceSpeed } = props

  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.isPlaying)

  const togglePlay = async (phraseInput, voice, voiceSpeed) => {
    const data = await handleTextToSpeech(phraseInput, voice, voiceSpeed);
    const audio = new Audio(data);
    // setAudioData(audio);
    if(isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      return dispatch(stopPlay(), isPlaying)
    } else {
      audio.play();
      return dispatch(startPlay(), isPlaying) && dispatch(stopPlay(), isPlaying)
    }
  };

    const { phraseName } = props
    return (
        <section className='phrase-container'
          onclick={togglePlay}
        >
            <Emoji 
              label={props.phraseName}
            />
            <p>{phraseName}</p>
        </section>
    )
}

export default Phrase