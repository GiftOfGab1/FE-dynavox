import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import setNewSocialSetting from '../../Store/Reducers/index'
import { addSocialSetting } from '../../Store/Actions';
import { useDispatch } from "react-redux";
import { postNewSocialSetting } from '../../Api/addSocialSetting'
import GetIcons from '../Icons/GetIcons'

function AddSocialSettingForm() {
    // const { id } = props
    const dispatch = useDispatch();
    const [socialSettingInput, setSocialSettingInput] = useState('')
    const [socialSettingImageInput, setSocialSettingImageInput] = useState('')

    const updateSocialSettings = async () => {
        const socialSettingResponse = await postNewSocialSetting(socialSettingInput, socialSettingImageInput)
        return dispatch(addSocialSetting(socialSettingResponse, setNewSocialSetting))
    }

    const handleFormSubmit = async formSubmitEvent => {
        await updateSocialSettings()
    };


    return (
        <>
            <form
                className='add-phrase-form'
                onSubmit={(e) => {
                    e.stopPropagation()
                //     // handleFormSubmit(e)
                }}
            >
                <h1>Add Subcategory</h1>
                <label>New Social Setting </label>
                <input
                    type='text'
                    name='text-input'
                    className='phrase-input'
                    onChange={(e) => {
                        setSocialSettingInput(e.target.value)
                    }}
                    value={socialSettingInput}
                ></input>
                <select
                    name="icon"
                    className="phrase-input"
                    id="icon-select"
                    onChange={(e) => { setSocialSettingImageInput(e.target.value) }}
                >
                    <option value="">--Please Choose an Icon--</option>
                    {GetIcons()}
                </select>
                    <Link
                        to="/"
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => {
                            handleFormSubmit(e)
                            setSocialSettingInput('')
                            setSocialSettingImageInput()
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
            </form>
        </>
    )
}

export default AddSocialSettingForm