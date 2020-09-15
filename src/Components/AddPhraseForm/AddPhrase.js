import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//This needs to be changed to ChooseVoice once I have access rights to the repo
import './AddPhrase.css';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
// import { addPhrasePost } from '../../Api/addPhrase'

import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay, setUser } from '../../Store/Actions';
import setUserDetails from '../../Store/Reducers/index'
// import Button from '../Button/Button'

function AddPhraseForm (name, id) {
  console.log(name, "name", id, 'id')  


  const isPlaying = useSelector((state) => state.AppState.isPlaying)
  const dispatch = useDispatch();
  const User = useSelector(state => state.AppState.userDetails)
  const voice = User.voice;
  const voiceSpeed = User.speed

  const [phraseInput, setPhraseInput] = useState('')

  
  const togglePlay = async () => {
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
  
  // const updateUserSettings = async () => {
  //   const userResponse = await updateUserPost(voice, voiceSpeed)
  //   return dispatch(setUser(userResponse.data.updateUser.user, setUserDetails))
  // }

  // fetch these from the api allow you to add more later on






  const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

  };


  
  return (
      <form 
          className='add-phrase-form'
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
      >
          <h1>Add Phrase</h1>
      <label>Phrase</label>
              <input
                  type='text'
                  name='text-input'
                  className='phrase-input'
                  onChange={(e) => {
                      setPhraseInput(e.target.value)
                  }}
                  value={phraseInput}
              ></input>
          <section className='play-save-container'>
              <button
                  className="save-and-play-buttons"
                  value='play'
                  name='play-button'
                  label={'Play'}
                  onClick={async(e) => {
                      e.preventDefault()
                      togglePlay();
                  }}
                  >Play
              </button>
              <Link to="/main-page" style={{ textDecoration: 'none', }}>
                  <button
                      className="save-and-play-buttons"
                      value='save'
                      name='save-button'
                      label={'Save'}
                      onClick={ e => {
                        e.preventDefault();
                        e.stopPropagation();
                        setPhraseInput('')
                        // setVoice('default')
                        // setVoiceSpeed(0)
                        // updateUserSettings()
                        // addPhrasePost()
                      }
                      }
                  >
                    Save
                  </button>
              </Link>
          </section>
      </form>
  )
}

export default AddPhraseForm