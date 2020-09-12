export const updateUser = async (voice, speed) => {
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
          updateUser(input: {
            id: 1 
            voice: "${voice}"
            speed: ${speed}
          }) { 
            user {
            firstName 
            lastName 
            email 
            voice 
            speed 
            sections { 
              title 
              icon 
              phrases { 
                expression 
                image } } 
              } } }`
            })
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}