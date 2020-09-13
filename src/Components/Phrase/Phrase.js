import React, { useState } from 'react'
import './Phrase.css';
import { Emoji } from '../Emoji/Emoji'

// import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { useDispatch, useSelector } from "react-redux";
// import { startPlay, stopPlay } from '../../Store/Actions';



function Phrase(props) {
  // const [Audio, setAudio] = useState({});
  const User = useSelector(state => state.AppState.userDetails)
  console.log(User)
  // // const { phraseInput, voice, voiceSpeed } = props

  // const dispatch = useDispatch();
  // const isPlaying = useSelector((state) => state.isPlaying)

  // const textToSpeech = async (phraseInput, voice, voiceSpeed) => {
  //   const data = await handleTextToSpeech(phraseInput, voice, voiceSpeed);
  //   // const audio = new Audio(data);
  //   return data;
  // }

  // const togglePlay = async (phraseInput, voice, voiceSpeed) => {
  //   const audio = await textToSpeech(phraseInput, voice, voiceSpeed);
  //   if(isPlaying) {
  //     await audio.pause();
  //     audio.currentTime = 0;
  //     return dispatch(stopPlay(), isPlaying)
  //   } else {
  //     await audio.play();
  //     return dispatch(startPlay(), isPlaying) && dispatch(stopPlay(), isPlaying)
  //   }
  // };

    const { phraseName  } = props

    return (
        <section className='phrase-container'
        >
            <Emoji
              phraseName={props.phraseName} 
              label={props.phraseName}
              voice={User.voice}
              speed={User.speed}
            />
            <p>{phraseName}</p>
        </section>
    )
}

export default Phrase