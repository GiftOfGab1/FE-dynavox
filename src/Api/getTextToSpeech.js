const API_KEY = "b2e2b3e1483a4d2494f2b1440b85875c";
// const VOICE = "Mary";
const LANGUAGE = "en-us";
// const RATE = "0";


export const getVoiceData = async (textToSpeech, voice, rate) => {
	try {
    
		const response = await fetch(`https://api.voicerss.org/?key=${API_KEY}&hl=${LANGUAGE}&v=${voice}&r=${rate}&src=${textToSpeech}`);
    // const response = await fetch(`https://flask-microservice-speech.herokuapp.com/speech/${textToSpeech}/${rate}/${voice}`);
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
    const audio = new Audio(url)
    console.log(url)
		return audio;
	} catch (error) {
		return error;
	}
}
