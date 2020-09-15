export const getSocialSettings = async () => {
    try {
        const response = await fetch('https://gift-of-gab.herokuapp.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `
                        query {
                            sections{
                            id
                            title
                            icon
                            phrases { 
                            expression 
                            image,
                            tags
                             }
                        }
                    }`
            })
        })
        return response.json()
    } catch (err) {
        console.log(err);
    }
}