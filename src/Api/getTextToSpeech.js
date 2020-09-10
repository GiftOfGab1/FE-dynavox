const API_KEY = "b2e2b3e1483a4d2494f2b1440b85875c";
// const VOICE = "Mary";
const LANGUAGE = "en-us";
// const RATE = "0";


export const getVoiceData = async (textToSpeech, voice, rate) => {
	try {
    
		// const response = await fetch(`https://api.voicerss.org/?key=${API_KEY}&hl=${LANGUAGE}&v=${voice}&r=${rate}&src=${textToSpeech}&b64=true`);
    const response = await fetch(`https://flask-microservice-speech.herokuapp.com/speech/${textToSpeech}/${rate}/${voice}`);
    const blob = response.blob();
    // console.log(base64)
    console.log(blob)
		return blob;
	} catch (error) {
		return error;
	}
}

export const handleTextToSpeech = async (textToSpeech, voice, rate) => {
	try {
		const blob = await getVoiceData(textToSpeech, voice, rate);
    const url = URL.createObjectURL(blob);
    console.log(url)
		return url;
	} catch (error) {
		return error;
	}
}

export const updateUser = async (voice, speed) => {
  try {
    const response = await fetch('https://gift-of-gab.herokuapp.com/v1/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
        query:`
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

export const getUserInfo = async () => {
	try {
		const response = await fetch('https://gift-of-gab.herokuapp.com/v1/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
        query:`
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