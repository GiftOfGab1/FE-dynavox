const API_KEY = "b2e2b3e1483a4d2494f2b1440b85875c";
const VOICE = "Mary";
const LANGUAGE = "en-us";
const RATE = "0";


export const getVoiceData = async (textToSpeech, voice, rate) => {
	try {
		const response = await fetch(`https://api.voicerss.org/?key=${API_KEY}&hl=${LANGUAGE}&v=${voice}&r=${rate}&src=${textToSpeech}`);
		const blob = await response.blob();
		return blob;
	} catch (error) {
		return error;
	}
}

export const handleTextToSpeech = async (textToSpeech, voice, rate) => {
	try {
		const blob = await getVoiceData(textToSpeech, voice, rate);
		const url = URL.createObjectURL(blob);
		return url;
	} catch (error) {
		return error;
	}
}

// export const getUserInfo = async () => {
// 	try {
// 		const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
// 			method: 'POST',
// 			headers: {
// 				'Target-URL': 'https://gift-of-gab.herokuapp.com/v1/graphql',
// 				'Content-Type': 'application/json',
// 				'Accept': 'application/json',
// 			},
// 			body: JSON.stringify({ query: "query{ user(id:1){ fistName } }" })
// 		})
// 		const thing = await response.text()
// 		return thing
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
export const getUserInfo = () => {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Target-URL", 'https://gift-of-gab.herokuapp.com/v1/graphql');

var graphql = JSON.stringify({
	query: "query {\n    user (id:1) {\n        firstName\n    }\n}",
	variables: {}
})
var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	body: graphql,
	redirect: 'follow'
};

	fetch("https://fe-cors-proxy.herokuapp.com", requestOptions)
	.then(response => console.log(response))
	// .then(result => console.log(result.data))
	.catch(error => console.log('error', error));
}