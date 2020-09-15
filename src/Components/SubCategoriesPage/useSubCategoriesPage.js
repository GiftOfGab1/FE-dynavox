import React from 'react'
import SubCategory from '../SubCategory/subCategory'
import { Link } from 'react-router-dom'


function useSubCategoriesPage(name, socialSettings) {
    console.log(name);
    const relatedPhrases = socialSettings && socialSettings.find(socialSetting => socialSetting.title === name)


    const removeUndefined = (relatedPhrases) => {
        const minusUndefined = relatedPhrases.phrases.map(phrase => {
            if (phrase.tags[0] === '') phrase.tags[0] = 'Common'
            return phrase
        })
        return sortRelatedPhrases(minusUndefined)
    }

    const sortRelatedPhrases = (relatedPhrases) => {
        const relatedPhrasesObj =  relatedPhrases.reduce((acc, phrase) => {
            if (!acc[phrase.tags]) {
                acc[phrase.tags] = []
            }
            acc[phrase.tags].push(phrase)
            return acc
        }, {})
        return renderSubCategories(relatedPhrasesObj)
    }

    const renderSubCategories = (relatedPhrasesObj) => {
        const relatedPhrasesKeys = Object.keys(relatedPhrasesObj)
        return relatedPhrasesKeys.map(key => {
            console.log(key);
            return (
            <Link
                name={name}
                key={key}
                to={`/phrase-page/${ name }/${ key }`}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >   
                <SubCategory categoryName={key}  />
            </Link>
            )
        })
    }


    return removeUndefined(relatedPhrases)
}

export default useSubCategoriesPage