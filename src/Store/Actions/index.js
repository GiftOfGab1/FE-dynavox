export const setSocialSettings = socialSettings => ({
  type: 'SET_SOCIAL_SETTINGS',
  socialSettings
});

export const addSocialSetting = socialSettings => ({
  type: 'ADD_SOCIAL_SETTING',
  socialSettings
})

export const getSubCategories = subCategories => ({
  type: 'GET_SUBCATEGORIES',
  subCategories
});

export const addSubCategory = subCategory => ({
  type: 'ADD_SUBCATEGORY',
  subCategory
});

export const getPhrases = phrases => ({
  type: 'GET_PHRASES',
  phrases
});

export const addPhrases = phrase => ({
  type: 'ADD_PHRASE',
  phrase
});
export const startPlay = isPlaying => ({
  type: 'START_PLAY', 
  isPlaying
})
export const stopPlay = isPlaying => ({
  type: 'STOP_PLAY', 
  isPlaying
})

export const setUser = userDetails => ({
  type: 'SET_USER',
  userDetails
})

export const updateUser = (userDetails) => ({
  type: 'UPDATE_USER',
  userDetails
})

