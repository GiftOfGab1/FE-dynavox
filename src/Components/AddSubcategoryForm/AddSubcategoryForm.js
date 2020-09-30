import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseAddSubcategoryForm from './UseAddSubcategoryForm'


function AddSubcategoryForm(props) {
    const [subcatTitleInput, setSubcatTitleInput] = useState('')
    const [subcatImageInput, setSubcatImageInput] = useState('')

    const subCategoryImages = UseAddSubcategoryForm()

    
    return (
        <>
            <form 
                className='add-phrase-form'
                onSubmit={(e) => {
                // e.stopPropagation()
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
                    <Link 
                        to="/" 
                        style={{ textDecoration: 'none' }}
                        onClick={e => {
                            // handleFormSubmit(e)
                            setSubcatTitleInput('')
                            setSubcatImageInput()
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