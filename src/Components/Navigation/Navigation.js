import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Navigation.css';

import { useDispatch, useSelector } from "react-redux";
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { startPlay, stopPlay} from '../../Store/Actions';

function Navigation() {

  const isPlaying = useSelector((state) => state.AppState.isPlaying)
  const dispatch = useDispatch();
  const User = useSelector(state => state.AppState.userDetails)
  const SocialSettings = useSelector(state => state.AppState.socialSettings)
  
  let voice, voiceSpeed, bathroom, sos
  if(SocialSettings) {
    voice = User.voice;
    voiceSpeed = User.speed
    bathroom = SocialSettings[2].phrases[6].expression
    sos = SocialSettings[2].phrases[5].expression
  }
  
  const togglePlay = async (phraseInput) => {

    const audio = await handleTextToSpeech(phraseInput, voice, voiceSpeed);
    if(isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      return dispatch(stopPlay(), isPlaying)
    } else {
      audio.play();
      return dispatch(startPlay(), isPlaying) && dispatch(stopPlay(), isPlaying)
    }
  };

  return (
    <nav className='navigation'>
      <section className='button-container'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button label={'Home'}/>
            <p>Home</p>
        </Link>
        <Link to="/choose-voice" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button label={'Settings'}/>
            <p>Options</p>
        </Link>  
        <section>
          <Button 
            label={'Help'}
            onClick={(e) => {togglePlay(sos)}}
            
          /> 
            <p>Help</p>
          </section>
          <section>
            <Button 
              label={'Bathroom'}
              onClick={(e) => {togglePlay(bathroom)}}
            /><p>Bathroom</p>
          </section>
      </section>
    </nav>
  )
}

export default Navigation