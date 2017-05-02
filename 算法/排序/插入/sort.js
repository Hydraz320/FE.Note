function insert(arr, n) {
	if(!Array.isArray(arr)) {
		throw Error('insert(): the given param is not an Array!');
	}
	if(typeof n !== "number") {
		n = arr.length;
	}
	for(var P = 1; P < n; P++) {
		var tmp = arr[P];
		for(var j = P; j>0 && tmp<arr[j-1]; j--) {
			arr[j] = arr[j-1];
		}
		arr[j] = tmp;
	}
	return arr;
}

var array = [45, 31, 2, 7, 88, 65, 37, 28];
var N = array.length;

console.log('sorted: ');
console.log(insert(array))