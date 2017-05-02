process.on('message', function (m) {
	console.log('CHILD got message: ' + JSON.stringify(m));
});

process.send({foo: 'bar'});