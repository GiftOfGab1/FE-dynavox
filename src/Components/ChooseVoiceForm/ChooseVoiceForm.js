import React, { useState } from 'react'
//This needs to be changed to ChooseVoice once I have access rights to the repo
import './ChooseVoice.css';
import Button from '../Button/Button'

function ChooseVoiceForm() {
    //State
    const [voiceSpeed, setVoiceSpeed] = useState(0)

    return (
        <form 
            className='choose-voice-form'
            onSubmit={() => console.log('hi')}
        >
            <h1>Choose Your Voice</h1>
        <label>Sample Phrase</label>
                <input
                    type='text'
                    name='text-input'
                    className='voice-selector-input'
                    // value={event.target.value}
                
                ></input>
            <label>Choose your voice</label>
            <select
                className='voice-selector-input'
                name='voice-selector'
            >
                <option 
                    name='default'
                    value='none'>Choose a Voice
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
                    name='increase-button'
                    value='.25'
                    label={'+'}
                    onClick={(e) => {
                        e.preventDefault()
                        console.log(e);
                        setVoiceSpeed(voiceSpeed + e.target.value)
                    }}
                    >+
                </button>
                <h5 className='voice-setting'>{voiceSpeed}</h5>
                <Button 
                    value='.25'
                    name='decrease-button'
                    label={'-'}
                />
            </section>
            <section className='voice-pitch-container'>
                <label className='setting-label'>Pitch</label>
                <Button 
                    name='increase-button'
                    value='.25'
                    label={'+'}
                    onClick={(e) => {
                        console.log(e);
                        setVoiceSpeed(voiceSpeed + e.target.value)
                    }}
                />
                <h5 className='voice-setting'>{voiceSpeed}</h5>
                <Button 
                    value='.25'
                    name='decrease-button'
                    label={'-'}
                />
            </section>
            </section>
            <section className='play-save-container'>
                <Button 
                    value='play'
                    name='play-button'
                    label={'Play'}
                />
                <Button 
                    value='save'
                    name='save-button'
                    label={'Save'}
                />
            </section>
        </form>
)
}

export default ChooseVoiceForm