import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function AddSubcategoryForm() {

    const imageSelection = [
        { title: "hello", image: "👋" },
        { title: "bank", image: "🏦" },
        { title: "morning", image: "🌅" },
        { title: "afternoon", image: "🏙" },
        { title: "night", image: "🌃" },
        { title: "yes", image: "👍" },
        { title: "no", image: "🚫" },
        { title: "great", image: "😀" },
        { title: "perfect", image: "👌" },
        { title: "card", image: "💳" },
        { title: "thanks", image: "🙏" },
        { title: "withdrawal", image: "💰" },
        { title: "deposit", image: "💸" },
        { title: "memo", image: "📝" },
        { title: "bank-note", image: "💵" },
        { title: "great-day", image: "😄" },
        { title: "x-hands", image: "🙅‍♀️" },
        { title: "party", image: "🎉" },
        { title: "yes", image: "👍" },
        { title: "no", image: "🚫" },
        { title: "sup", image: "👋" },
        { title: "yo", image: "🪀" },
        { title: "hundred", image: "💯" },
        { title: "rabbit", image: "🐇" },
        { title: "joke-1", image: "🤣" },
        { title: "joke-2", image: "🙉" },
        { title: "dog", image: "🐶" },
        { title: "rtj", image: "🎹" },
        { title: "school", image: "🎒" },
        { title: "drink", image: "🥃" },
        { title: "peace", image: "✌️" },
        { title: "wave", image: "👋" },
        { title: "felicia", image: "👩" },
        { title: "sos", image: "🆘" },
        { title: "Greetings", image: "🤝" },
        { title: "Common", image: "😎" },
        { title: "Transactions", image: "💰" },
        { title: "Goodbyes", image: "👋" },
        { title: "Jokes", image: "😜" },
        { title: "Joe", image: "😊" },
    ]

    const optionItems = imageSelection.map((selection) =>
        <option value={selection.title}>{selection.image + selection.title}
        </option>
    );

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
                        // setPhraseInput(e.target.value)
                    }}
                    // value={phraseInput}
                ></input>
                <select 
                    name="icon" 
                    className="phrase-input" 
                    id="icon-select" 
                    // onChange={(e) => { setImageInput(e.target.value) }}
                >
                    <option value="">--Please Choose an Icon--</option>
                    {optionItems}
                </select>
                <section className='play-save-container'>
                <Link 
                    to="/" 
                    style={{ textDecoration: 'none' }}
                    onClick={e => {
                        // handleFormSubmit(e)
                        // setPhraseInput('')
                        // setImageInput()
                    }
                    }
                >
                    <button
                      className="save-and-play-buttons"
                      value='save'
                      name='save-button'
                      label={'Save'}
                  >
                    Save
                  </button>
              </Link>
          </section>
            </form>
        </>
  )
}
export default AddSubcategoryForm