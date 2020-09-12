export const getUserInfo = async () => {
    try {
        const response = await fetch('https://gift-of-gab.herokuapp.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `
        query{ 
          user(id: 1){ 
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
                image 
              } } } }`
            })
        })
        return response.json()
    } catch (err) {
        console.log(err);
    }
}