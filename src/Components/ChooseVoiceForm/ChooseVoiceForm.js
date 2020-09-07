import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//This needs to be changed to ChooseVoice once I have access rights to the repo
import './ChooseVoice.css';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import Button from '../Button/Button'

function ChooseVoiceForm() {
    //State
    const [phraseInput, setPhraseInput] = useState('')
    const [voice, setVoice] = useState('default')
    const [voiceSpeed, setVoiceSpeed] = useState(0)
    const [audioData, setAudioData] = useState({});
    const [playing, setPlay] = useState(false);

    const togglePlay = async () => {
      const data = await handleTextToSpeech(phraseInput, voice, voiceSpeed);
      const audio = new Audio(data);
      setAudioData(audio);
      setPlay({ playing: true });
      await audio.play();
      setPlay({playing: false})
    };


    return (
        <form 
            className='choose-voice-form'
            onSubmit={() => console.log('hi')}
            preventDefault
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
                    value='Amy'>Amy
                </option>
                <option 
                    name='name'
                    value='Mary'>Mary
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

                >
                    </button>
                <Link to="/main-page" style={{ textDecoration: 'none', }}>
                <button
                    className="save-and-play-buttons"
                    value='save'
                    name='save-button'
                    label={'Save'}
                    onSubmit={ e => {
                        e.preventDefault();
                        setPhraseInput('')
                        setVoice('default')
                        setVoiceSpeed(0)
                      }
                    }
                >
                     Save
                </button>
                </Link>

                 Play

                
            </section>
        </form>
)
}

export default ChooseVoiceForm