// Study of EventEmitter

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('quick_event', function() {
	console.log('quick_event occured.');
});

event.on('slow_event', function() {
	console.log('slow_event occured.');
});


console.log('Start Event Test...');
setTimeout(function() {
	event.emit('quick_event');
}, 1000);

setTimeout(function() {
	event.emit('slow_event');
}, 5000);
console.log('Event Test End.');