//This File can probably be deleted
import React, { useState } from 'react'
import { addPhrases } from '../../Store/Actions';
import setPhrase from '../../Store/Reducers/index'
import { postPhrase } from '../../Api/postPhrase'
import { useDispatch } from "react-redux";




function UseAddSubcategoryForm(e, phraseInput, imageInput, subcatTitleInput, id) {
    console.log('id', id);
    const dispatch = useDispatch();
    // const [subcatTitleInput, setSubcatTitleInput] = useState('')
    // const [subcatImageInput, setSubcatImageInput] = useState('')
    // const [phraseInput, setPhraseInput] = useState('')
    // const [imageInput, setImageInput] = useState('')
    // console.log(subcatImageInput);


    const updatePhrases = async () => {
        const phraseResponse = await postPhrase(phraseInput, imageInput, subcatTitleInput, id)
        return dispatch(addPhrases(phraseResponse, setPhrase))
    }

    const handleFormSubmit = async formSubmitEvent => {
        await updatePhrases()
    };

    handleFormSubmit(e)

}

export default UseAddSubcategoryForm