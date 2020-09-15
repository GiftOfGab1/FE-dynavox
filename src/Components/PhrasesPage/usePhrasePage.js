import React from 'react'
import Phrase from '../Phrase/Phrase'
import { Link } from 'react-router-dom'


function usePhrasePage(id, name, socialSettings) {
    const currentSetting = socialSettings.find(socialSetting => socialSetting.title === name)
    const subSettingPhrases = currentSetting.phrases.filter(phrase => phrase.tags[0] === id)
    return subSettingPhrases.map(phrase => {
        return (<Link
            key={name}
            to={`/subCategories-page/${name}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <Phrase categoryName={phrase}  phraseName={phrase.expression}  />
        </Link>)
    }
)
} 

export default usePhrasePage