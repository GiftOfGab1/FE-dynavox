export const postPhrase = async (expression, image, tags, section ) => {
  console.log(section)
  let  sectionId;
  section === "Bank" ? sectionId = 1 : sectionId = 2
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
                    {expression: "${expression}", image: "${image}", tags: "${tags}", sectionId: "${sectionId}" })
                    { phrase { id, expression, image, tags } }

                  }`
          })
      })
      return response.json()
  } catch (err) {
      console.log(err)
  }
  
}