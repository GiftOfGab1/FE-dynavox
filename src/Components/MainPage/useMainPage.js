import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getSocialSettings } from '../../Api/getSocialSettings'
import { setSocialSettings } from '../../Store/Actions/index'
import setAllSocialSettings from '../../Store/Reducers/index'


function useMainPage() {

    const dispatch = useDispatch();


    const getAllSocialSettings = async () => {
        const socialSettings = await getSocialSettings()
        console.log(socialSettings.data.sections);
        return dispatch(setSocialSettings(socialSettings.data.sections, setAllSocialSettings))
    }

    

    useEffect(() => {
        getAllSocialSettings()
    })
}


export default useMainPage