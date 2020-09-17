const API_KEY = "87c7d481c1364b9bb819edffd7d900dc";
const LANGUAGE = "en-us";


export const getVoiceData = async (textToSpeech, voice, rate) => {
	try {
		const response = await fetch(`https://api.voicerss.org/?key=${API_KEY}&hl=${LANGUAGE}&v=${voice}&r=${rate}&src=${textToSpeech}`);
    //const response = await fetch(`https://flask-microservice-speech.herokuapp.com/speech/${textToSpeech}/${rate}/${voice}`);
    const blob = response.blob();
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
