export const postNewSocialSetting = async (title, icon) => {
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
                  newSection(input: {
                      title: "${title}", 
                      icon: "${icon}"
                    })
                    { section 
                        { 
                            id, 
                            title, 
                            icon 
                        } 
                    }
                }`
            })
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }

}