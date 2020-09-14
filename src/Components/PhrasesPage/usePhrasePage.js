import React from 'react'
import Phrase from '../Phrase/Phrase'

function usePhrasePage(id, name, socialSettings) {
    const currentSetting = socialSettings.find(socialSetting => socialSetting.title === name)
    const subSettingPhrases = currentSetting.phrases.filter(phrase => phrase.tags[0] === id)
    return subSettingPhrases.map(phrase => <Phrase categoryName={phrase} />
)
} 

export default usePhrasePage