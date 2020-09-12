import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getSocialSettings } from '../../Api/getSocialSettings'
import { setSocialSettings } from '../../Store/Actions/index'
import  setAllSocialSettings  from '../../Store/Reducers/index'
import { store } from '../../index'
import SubCategory from '../SubCategory/subCategory'
import { connect } from 'react-redux';





function useMainPage() {
   
    const dispatch = useDispatch();
    const thing = store

    // const  mapStateToProps = (state, subSections) => {
        // console.log(state);
    // }

    const getAllSocialSettings = async () => {
        const socialSettings = await getSocialSettings()
        // console.log(socialSettings.data.sections);
        return dispatch(setSocialSettings(socialSettings.data.sections, setAllSocialSettings))
    }

    const renderSubCategories = (subCategories) =>  {
        // console.log('hi');
        // subCategories.map(subCategory => {

        // })
    }

    useEffect(() => {
        if (!socialSettings) getAllSocialSettings()
        console.log(thing);
        // if (socialSettings !== null) console.log(socialSettings);

    })
}


// export default connect(mapStateToProps)(useMainPage);
export default useMainPage
