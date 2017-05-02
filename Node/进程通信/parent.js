var cp = require('child_process');
var n = cp.fork(__dirname + '/sub.js');

n.on('message', function (m) {
	console.log('PARENT got message: ' + JSON.stringify(m));
});

n.send({hello: 'hello'});