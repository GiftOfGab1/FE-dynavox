import React, { useState } from 'react'
//This needs to be changed to ChooseVoice once I have access rights to the repo
<<<<<<< HEAD
import './chooseVoice.css';
import Button from '../Button/button'
=======
import './ChooseVoice.css';
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import Button from '../Button/Button'
>>>>>>> 4119bdd443ff2446404aec46b8e29d162672ae4a

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
                <Button
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
                />
                <h5 className='voice-setting'>{voiceSpeed}</h5>
                <Button 
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
                />
            </section>
            </section>
            <section className='play-save-container'>
                <Button 
                    value='play'
                    name='play-button'
                    label={'Play'}
                    onClick={async(e) => {
                        e.preventDefault()
                        togglePlay();
                    }}

                />
                <Button 
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
                />
            </section>
        </form>
)
}

export default ChooseVoiceForm