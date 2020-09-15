import React from 'react';
import "../Emoji/Emoji.css"
import { connect } from "react-redux"
import { store } from '../../index'
import PropTypes from 'prop-types';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay } from '../../Store/Actions';

function Emoji (props) {
  
  const dispatch = useDispatch();
  const { phraseName, voice, speed  } = props
  const isPlaying = useSelector((state) => state.isPlaying)

  const textToSpeech = async () => {
    const data = await handleTextToSpeech(phraseName, props.voice, props.speed);
    return data;
  }

  const togglePlay = async () => {

    const audio = await textToSpeech();

    if (isPlaying) {
      await audio.pause();
      audio.currentTime = 0;
      return dispatch(stopPlay(), isPlaying)
    } else {
      await audio.play();
      return dispatch(startPlay(), isPlaying) && dispatch(stopPlay(), isPlaying)
    }

  }

  const handleClick = async () => {

    if (props.voice) {
      return await togglePlay(props.phraseName, voice, speed)

    }
  }

    return (
      
        <section className="emoji-background">
          <span
            className={`emoji ${props.image}`}
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
            onClick={handleClick}

      >
      </span>
    </section>
  )
};
Emoji.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string,
}

const mapStateToProps = () => {
  return store.getState()
}

export default connect(mapStateToProps)(Emoji);
