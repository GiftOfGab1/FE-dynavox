import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import UseAddSubcategoryForm from './UseAddSubcategoryForm'
import GetIcons from '../Icons/GetIcons'
import { postPhrase } from '../../Api/postPhrase'
import setPhrase from '../../Store/Reducers/index'
import { addPhrases } from '../../Store/Actions';
import { useDispatch } from "react-redux";

function AddSubcategoryForm(props) {
    const { id }  =  props
    const dispatch = useDispatch();
    const [subcatTitleInput, setSubcatTitleInput] = useState('')
    const [subcatImageInput, setSubcatImageInput] = useState('')
    const [phraseInput, setPhraseInput] = useState('')
    const [imageInput, setImageInput] = useState('')
    // const handleSubmit = (e, phraseInput, imageInput, subcatTitleInput, id) => UseAddSubcategoryForm(e, phraseInput, imageInput, subcatTitleInput, id)
    console.log(subcatImageInput);


    const subCategoryImages = GetIcons()

    const updatePhrases = async () => {
        const phraseResponse = await postPhrase(phraseInput, imageInput, subcatTitleInput, id)
        return dispatch(addPhrases(phraseResponse, setPhrase))
    }

    const handleFormSubmit = async formSubmitEvent => {
        await updatePhrases()
    };

    
    return (
        <>
            <form 
                className='add-phrase-form'
                onSubmit={(e) => {
                e.stopPropagation()
                // handleFormSubmit(e)
            }}
            >
                <h1>Add Subcategory</h1>
                    <label>Category Name </label>
                    <input
                        type='text'
                        name='text-input'
                        className='phrase-input'
                        onChange={(e) => {
                        setSubcatTitleInput(e.target.value)
                    }}
                    value={subcatTitleInput}
                ></input>
                <select 
                    name="icon" 
                    className="phrase-input" 
                    id="icon-select" 
                    onChange={(e) => { setSubcatImageInput(e.target.value) }}
                >
                    <option value="">--Please Choose an Icon--</option>
                    {subCategoryImages}
                </select>
                <section className='play-save-container'>
                    <label>Phrase</label>
                    <input
                        type='text'
                        name='text-input'
                        className='phrase-input'
                        onChange={(e) => {
                            setPhraseInput(e.target.value)
                        }}
                        value={phraseInput}
                    ></input>
                    <select name="icon" className="phrase-input" id="icon-select" onChange={(e) => { setImageInput(e.target.value) }}>
                        <option value="">--Please Choose an Icon--</option>
                        {subCategoryImages}
                    </select>
                    <Link 
                        to="/" 
                        style={{ textDecoration: 'none' }}
                        onClick={e => {
                            handleFormSubmit(e)
                            setSubcatTitleInput('')
                            setSubcatImageInput()
                            setPhraseInput('')
                            setImageInput()
                            }
                        }
                    >
                        <button
                            className="save-and-play-buttons"
                            value='save'
                            name='save-button'
                            label={'Save'}
                        >Save
                        </button>
                    </Link>
                </section>
            </form>
        </>
  )
}
export default AddSubcategoryForm