function Lazyman (name){
	var me = this;
	me.task = [];
	var fn = (function (n) {
		return function () {
			console.log('Hi! This is ' + n +'!');
			me.next();
		}
	})(name);
	me.task.push(fn);
	setTimeout(function () {
		me.next();
	}, 0);
}

Lazyman.prototype = {
	constructor: Lazyman,
	next: function () {
		var fn = this.task.shift();
		fn && fn();
	},	
	eat: function (type) {
		var me = this;
		var fn = (function (t) {
			return function () {
				console.log('Eat ' + t + '~');
				me.next();
			}
		})(type);
		me.task.push(fn);
		return me;
	},
	sleep: function (time) {
		var me = this;
		var fn = (function (t) {
			return function () {
				setTimeout(function () {
					console.log('Wake up after ' + t);
					me.next();
				}, t*1000);
			}
		})(time);
		me.task.push(fn);
		return me;
	},
	sleepFirst: function (time) {
		var me = this;
		var fn = (function (t) {
			return function () {
				setTimeout(function () {
					console.log('Wake up after ' + t);
					me.next();
				}, t*1000);
			}
		})(time);
		me.task.unshift(fn);
		return me;
	}
}

function lazyMan (name) {
	return new Lazyman(name);
}
lazyMan('Hank').eat('dinner').sleepFirst(1).sleep(1).eat('dinner');