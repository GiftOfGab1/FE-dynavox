import React, { useEffect, useState } from 'react'
import { handleTextToSpeech } from '../../Api/getTextToSpeech'
import { updateUser as updateUserPost } from '../../Api/updateUser'
import { useDispatch, useSelector } from "react-redux";
import { startPlay, stopPlay, setUser } from '../../Store/Actions';
import setUserDetails from '../../Store/Reducers/index'

const isPlaying = useSelector((state) => state.isPlaying)
const dispatch = useDispatch();
const [phraseInput, setPhraseInput] = useState('')
const [voice, setVoice] = useState('default')
const [voiceSpeed, setVoiceSpeed] = useState(0)

function useChooseVoiceForm() {

    const togglePlay = async () => {
        const data = await handleTextToSpeech(phraseInput, voice, voiceSpeed);
        const audio = new Audio(data);
    // setAudioData(audio);
            if (isPlaying) {
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
        togglePlay(),
        updateUserSettings()
    )
}

export default useChooseVoiceForm
