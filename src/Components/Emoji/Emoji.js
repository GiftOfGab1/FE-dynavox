import React from 'react';
import PropTypes from 'prop-types';

import "../Emoji/Emoji.css"
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay } from '../../Store/Actions';

export const Emoji = props => {
  // const [Audio, setAudio] = useState({});
  const dispatch = useDispatch();
  
  const { phraseName, voice, speed  } = props

  
  const isPlaying = useSelector((state) => state.isPlaying)
  // const { phraseInput, voice, voiceSpeed } = props


  const textToSpeech = async () => {
    const data = await handleTextToSpeech(phraseName, props.voice, props.speed);
    // const audio = new Audio(data);
    return data;
  }

  const togglePlay = async () => {

      const audio = await textToSpeech();

      if(isPlaying) {
        await audio.pause();
        audio.currentTime = 0;
        return dispatch(stopPlay(), isPlaying)
      } else {
        await audio.play();
        return dispatch(startPlay(), isPlaying) && dispatch(stopPlay(), isPlaying)
      }

  };
  const handleClick = async () => {
    if(props.voice) {
      return await togglePlay(phraseName, voice, speed)

    }
  }
  
  return (

  
  <section className="emoji-background">
    <span
        className={`emoji ${props.img}`}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        onClick={handleClick}
    >
        {/* {props.symbol} */}
    </span>
  </section>
  )
};


Emoji.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string,
 }

export default Emoji;