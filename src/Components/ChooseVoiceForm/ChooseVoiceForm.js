import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ChooseVoice.css';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { updateUser as updateUserPost } from '../../Api/updateUser'
import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay, setUser } from '../../Store/Actions';
import setUserDetails from '../../Store/Reducers/index'

function ChooseVoiceForm() {

    
    const isPlaying = useSelector((state) => state.AppState.isPlaying)
    const dispatch = useDispatch();
    const [phraseInput, setPhraseInput] = useState('')
    const [voice, setVoice] = useState('default')
    const [voiceSpeed, setVoiceSpeed] = useState(0)

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

    const updateUserSettings = async () => {
      const userResponse = await updateUserPost(voice, voiceSpeed)
      return dispatch(setUser(userResponse.data.updateUser.user, setUserDetails))
    }


    return (
        <form 
            className='choose-voice-form'
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
        >
            <h1>Choose Your Voice</h1>
        <label>Sample Phrase</label>
                <input
                    type='text'
                    name='text-input'
                    className='voice-selector-input text-input'
                    onChange={(e) => {
                        setPhraseInput(e.target.value)
                    }}
                    value={phraseInput}
                ></input>
            <label>Choose your voice</label>
            <select
                className='voice-selector-input dropdown-input'
                name='voice-selector'
                onChange={(e) => {
                    setVoice(e.target.value)
                }}
            >
                <option 
                    name='default'
                    value='default'>Choose a Voice
                </option>
                <option 
                    name='name'
                    value="Amy">Amy
                </option>
                <option 
                    name='name'
                    value="Mary">Mary
                </option>
                <option 
                    name='name'
                    value="Clara">Clara
                </option>
                <option
                    name='name'
                    value="John">John
                </option>
                <option
                    name='name'
                    value="Mike">Mike
                </option>
            </select>
            <section className='voice-setting-container'>
            <section className='voice-speed-container'>
                <label className='setting-label'>Speed</label>
                <button
                    className="faster-button"
                    name='increase-button'
                    value='1'
                    label={'+'}
                    onClick={(e) => {
                        e.preventDefault()
                        e.target.name === 'increase-button' && voiceSpeed < 5 && setVoiceSpeed(voiceSpeed + parseInt(e.target.value))
                        e.target.name === 'decrease-button' && voiceSpeed > -5 && setVoiceSpeed(voiceSpeed - parseInt(e.target.value))
                    }}
                    > +
                </button>
                <h5 className='voice-setting'>{voiceSpeed}</h5>
                <button
                    className="slower-button"
                    value='1'
                    name='decrease-button'
                    label={'-'}
                    onClick={(e) => {
                        e.preventDefault()
                        e.target.name === 'increase-button' && voiceSpeed < 5 && setVoiceSpeed(voiceSpeed + parseInt(e.target.value))
                        e.target.name === 'decrease-button' && voiceSpeed > -5 && setVoiceSpeed(voiceSpeed - parseInt(e.target.value))
                    }}
                    > -
                </button>
            </section>
            </section>
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
                        setPhraseInput('')
                        setVoice('default')
                        setVoiceSpeed(0)
                        updateUserSettings()
                    }
                    }>
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

export default ChooseVoiceForm