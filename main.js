
const maxApi = require('max-api');

// maxApi.post('Hello World');


var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze("This is a test sentence to analyse");
console.dir(result);    // Score: -2, Comparative: -0.666

maxApi.post(result);


maxApi.addHandler('greeting', () => {
	maxApi.post('got greeting thanks very much');
	maxApi.outlet(result);
});



// let x1=0;

// maxApi.addHandler('input', (dir) => {
// 	if ( dir == 'UP') {
// 		x1 += 1;
// 	}
	
	
// })