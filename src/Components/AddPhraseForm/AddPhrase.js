import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AddPhrase.css';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { postPhrase } from '../../Api/postPhrase'

import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay, addPhrases} from '../../Store/Actions';
import setPhrase from '../../Store/Reducers/index'


function AddPhraseForm (props) {
  const { id, name } = props
  const isPlaying = useSelector((state) => state.AppState.isPlaying)
  const dispatch = useDispatch();
  const User = useSelector(state => state.AppState.userDetails)
  const voice = User.voice;
  const voiceSpeed = User.speed

  const [ phraseInput, setPhraseInput ] = useState('')
  const [ imageInput, setImageInput ] = useState('')

  const imageSelection = [
    {title: "hello", image: "👋"},
    {title: "bank", image: "🏦"},
    {title: "morning", image: "🌅"},
    {title: "afternoon", image: "🏙"},
    {title: "night", image: "🌃"},
    {title: "yes", image: "👍"},
    {title: "no", image: "🚫"},
    {title: "great", image: "😀"},
    {title: "perfect", image: "👌"},
    {title: "card", image: "💳"},
    {title: "thanks", image: "🙏"},
    {title: "withdrawal", image: "💰"},
    {title: "deposit", image: "💸"},
    {title: "memo", image: "📝"},
    {title: "bank-note", image: "💵"},
    {title: "great-day", image: "😄"},
    {title: "x-hands", image: "🙅‍♀️"},
    {title: "party", image: "🎉"},
    {title: "yes", image: "👍"},
    {title: "no", image: "🚫"},
    {title: "sup", image: "👋"},
    {title: "yo", image: "🪀"},
    {title: "hundred", image: "💯"},
    {title: "rabbit", image: "🐇"},
    {title: "joke-1", image: "🤣"},
    {title: "joke-2", image: "🙉"},
    {title: "dog", image: "🐶"},
    {title: "rtj", image: "🎹"},
    {title: "school", image: "🎒"},
    {title: "drink", image: "🥃"},
    {title: "peace", image: "✌️"},
    {title: "wave", image: "👋"},
    {title: "felicia", image: "👩"},
    {title: "sos", image: "🆘"},
    {title: "Greetings", image: "🤝"},
    {title: "Common", image: "😎"},
    {title: "Transactions", image: "💰"},
    {title: "Goodbyes", image: "👋"},
    {title: "Jokes", image: "😜"},
    {title: "Joe", image: "😊"},
  ]

  const optionItems = imageSelection.map((selection) =>
    <option value={selection.title}>{selection.image + selection.title}
    </option>
  );

  
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
                  { optionItems }
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