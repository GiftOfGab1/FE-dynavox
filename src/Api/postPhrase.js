import { store } from '../index'

export const postPhrase = async (expression, image, tags, section ) => {

  const { socialSettings } = store.getState().AppState
  const sectionId = socialSettings.find(socialSetting => socialSetting.title === section)
  try {
      const response = await fetch('https://gift-of-gab.herokuapp.com/v1/graphql', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query: `
                mutation { 
                  newPhrase(input: 
                    {expression: "${expression}", image: "${image}", tags: "${tags}", sectionId: "${sectionId.id}" })
                    { phrase { id, expression, image, tags } }

                  }`
          })
      })
      return response.json()
  } catch (err) {
      console.log(err)
  }
  
}



