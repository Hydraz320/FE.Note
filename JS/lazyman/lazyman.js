function Lazyman(name) {
	var me = this;
	me.task = [];
	var fn = (function (name) {
		return function () {
			console.log("Hi! This is " + name + "!");
			me.next();
		}
	})(name);
	me.task.push(fn);
	// 这里就是0s后放入空闲队列而已 已经可以从单纯的延迟执行的浅显理解中解脱了
	setTimeout(function () {
		me.next();
	}, 0);
}

Lazyman.prototype = {
	next: function () {
		var me = this;
		var fn = me.task.shift();
		fn && fn();
	},
	eat: function (type) {
		var me = this;
		var fn = (function (type) {
			return function () {
				console.log('Eat ' + type + '~');
				me.next();
			}
		})(type);
		me.task.push(fn);
		return me;// 用于链式操作
	},
	sleep: function (time) {
		var me = this;
		var fn = (function (time) {
			return function () {
				setTimeout(function () {
					console.log('Wake up after' + time + 's');
					me.next();
				}, 1000*time);
			}
		})(time);
		me.task.push(fn);
		return me;
	},
	sleepFirst: function (time) {
		var me = this;
		var fn = (function (time) {
			return function () {
				setTimeout(function () {
					console.log('Wake up after' + time + ' s');
					me.next();
				}, 1000*time);
			}
		})(time);
		me.task.unshift(fn);
		return me;
	}
}

function lazyMan (name) {
	return new Lazyman(name);
}

// for test
lazyMan('Hank').sleep(1).eat('dinner');