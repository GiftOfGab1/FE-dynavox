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
// const [playing, setPlay] = useState(false);
// const [audioData, setAudioData] = useState({});

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
        togglePlay(),
        updateUserSettings()
    )
}

export default useChooseVoiceForm
