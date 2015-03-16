// read file data

var fs = require('fs');

console.log('Start Asyncronized Reading...');
fs.readFile('file.txt', 'utf-8', function(err, data) {
	if(err) {
		console.error(err);
	}
	else {
		console.log(data);
	}
});
console.log('Reach the end of Asyncronized Reading code.');

console.log('Start Syncronized Reading...');
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('Reach the end of Syncronized Reading code.');