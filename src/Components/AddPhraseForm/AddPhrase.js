import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AddPhrase.css';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { postPhrase } from '../../Api/postPhrase'
import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay, addPhrases} from '../../Store/Actions';
import setPhrase from '../../Store/Reducers/index'
import GetIcons from '../Icons/GetIcons'



function AddPhraseForm (props) {
  const { id, name } = props
  const isPlaying = useSelector((state) => state.AppState.isPlaying)
  const dispatch = useDispatch();
  const User = useSelector(state => state.AppState.userDetails)
  const voice = User.voice;
  const voiceSpeed = User.speed
  const [ phraseInput, setPhraseInput ] = useState('')
  const [ imageInput, setImageInput ] = useState('')
  const phraseImages = GetIcons()

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
  
  const updatePhrases = async () => {
    const phraseResponse = await postPhrase(phraseInput, imageInput, name, id)
    return dispatch(addPhrases(phraseResponse, setPhrase))
  }

  const handleFormSubmit = async formSubmitEvent => {
    await updatePhrases()
  };

  return (
      <form 
          className='add-phrase-form'
          onSubmit={(e) => {
            e.stopPropagation()
            handleFormSubmit(e)
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
              <select name="icon" className="phrase-input" id="icon-select" onChange={(e) => {setImageInput(e.target.value)}}>
                <option value="">--Please Choose an Icon--</option>
                  { phraseImages }
              </select>
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
              <Link 
                to="/" 
                style={{ textDecoration: 'none' }}
                onClick={e => {
                  handleFormSubmit(e)
                  setPhraseInput('')
                  setImageInput()
                }
              }
              >
                  <button
                      className="save-and-play-buttons"
                      value='save'
                      name='save-button'
                      label={'Save'}
                  >
                    Save
                  </button>
              </Link>
          </section>
      </form>
  )
}

export default AddPhraseForm