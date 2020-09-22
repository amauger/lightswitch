var Gpio = require('onoff').Gpio;
var pushButton = new Gpio(17,'in','falling'); 
// pin 17 is input (change if you want), 'in' this is an input button, 
// 'falling' means we only care when the button is pushed down 
// (not when it comes back up, I'm assuming this is a momentary switch, otherwise change to 'both')

async function toggleLights() {
	const response = await fetch('http://localhost:3000/assistant', {
		method: 'POST', 
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify({
			'command': 'toggle the main light',
			'converse': false,
			'user': 'Angus'
		})
	})
	console.log(response);
	return response;
}

function unexportOnClose(){
	pushButton.unexport();
};

//*****MAIN*****

// when there is a hardware interrupt (from the pushButton), check for error and toggle lights
pushButton.watch( (err, value) => {
		if(err){
			console.log('Oop! There was an error: ', err);
			return;
		}
		toggleLights();
	});

// shutdown process
process.on('SIGINT', unexportOnClose);