import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//This needs to be changed to ChooseVoice once I have access rights to the repo
import './ChooseVoice.css';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { updateUser as updateUserPost } from '../../Api/updateUser'

import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay, setUser } from '../../Store/Actions';
import setUserDetails from '../../Store/Reducers/index'
// import Button from '../Button/Button'
import './ChooseVoice.css';

function ChooseVoiceForm() {
    //State

    
    const isPlaying = useSelector((state) => state.isPlaying)
    const dispatch = useDispatch();

    const [phraseInput, setPhraseInput] = useState('')
    const [voice, setVoice] = useState('default')
    const [voiceSpeed, setVoiceSpeed] = useState(0)
    // const [playing, setPlay] = useState(false);
    // const [audioData, setAudioData] = useState({});

    const togglePlay = async () => {
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

    const updateUserSettings = async () => {
      // const user = useSelector((state) => state.userDetails)
      // console.log(user)
      const userResponse = await updateUserPost(voice, voiceSpeed)
      // const voiceUpdate = userResponse.data.updateUser.user.voice
      // const speedUpdate = userResponse.data.updateUser.user.speed
      // console.log(user)
      // user.voice = voiceUpdate 
      // user.speed = speedUpdate
      // event.preventDefault()
      // return dispatch(setUser(user, setUserDetails))
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
                    className='voice-selector-input'
                    onChange={(e) => {
                        setPhraseInput(e.target.value)
                    }}
                    value={phraseInput}
                ></input>
            <label>Choose your voice</label>
            <select
                className='voice-selector-input'
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
                    voiceSpeed={voiceSpeed}
                    setVoiceSpeed={setVoiceSpeed}
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
                    voiceSpeed={voiceSpeed}
                    setVoiceSpeed={setVoiceSpeed}
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
                            setVoice('default')
                            setVoiceSpeed(0)
                            updateUserSettings()
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

export default ChooseVoiceForm