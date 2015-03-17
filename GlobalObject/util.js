// global object --> util

var util = require('util');


console.log('-----start util.inherits test-----');
function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function() {
		console.log('Hello ' + this.name);
	};
}
Base.prototype.showBase = function() {
	console.log(this.base);
};
Base.prototype.base = '1991_prototype';

function Sub() {
	this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showBase();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showBase();
//objSub.sayHello();
console.log(objSub);
console.log('-----end util.inherits test-----');




console.log('-----start util.inspect test-----');
function TestInspect() {
	this.name = 'Test';

	this.toString = function() {
		return this.name;
	};
}
TestInspect.prototype.prop = 'prototype_property';

var obj = new TestInspect();

console.log('toString output');
console.log(obj);
console.log('inspect output');
console.log(util.inspect(obj));
console.log('inspect output with Hidden details');
console.log(util.inspect(obj, true));

console.log('-----end util.inspect test-----');