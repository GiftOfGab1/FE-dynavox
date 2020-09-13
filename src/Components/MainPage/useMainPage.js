import React, { useEffect } from 'react'
import SubCategory from '../SubCategory/subCategory'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { getSocialSettings } from '../../Api/getSocialSettings'
import { setSocialSettings } from '../../Store/Actions/index'
import  setAllSocialSettings  from '../../Store/Reducers/index'
import { useSelector } from 'react-redux'


function useMainPage(socialSettings) {
  

  const User = useSelector(state => state.AppState.userDetails)
  // const useMountEffect = (fun) => useEffect(fun, [])
  

    const dispatch = useDispatch();

    const getAllSocialSettings = async () => {
        const socialSettings = await getSocialSettings()
        dispatch(setSocialSettings(socialSettings.data.sections, setAllSocialSettings))
        return socialSettings
    }

    const createSubCategories = (socialSettings) => {
        const allButQuickResponses =  socialSettings.filter(socialSetting => socialSetting.title !== 'Quick Responses')
        const subCategories = allButQuickResponses.map(response => {
          return  <Link key={response.title} to="/phrases-page" style={{ textDecoration: 'none', color: 'inherit' }}><SubCategory categoryName={response.title} /></Link>
        })
        return subCategories
    }

    useEffect(() => {
        if(User && !socialSettings)  {
          getAllSocialSettings()
        }
    })

    return socialSettings && createSubCategories(socialSettings)
}



export default useMainPage
