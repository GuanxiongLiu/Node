// global object --> process

console.log('-----show input argument vector-----');
console.log(process.argv);

console.log('-----standard ouput stream-----');
process.stdout.write('This context is outputed through standard output stream.\n');

console.log('-----standard input stream-----');
process.stdin.on('data', function(data) {
	process.stdout.write('read from the console: ' + data.toString());
});
