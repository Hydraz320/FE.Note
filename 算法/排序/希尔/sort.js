function shell(arr, n) {
	if(!Array.isArray(arr)) {
		throw Error('shell(): the given param is not an Array!');
	}
	if(typeof n !== "number") {
		n = arr.length;
	}
	var i, j, Increment;
	var tmp;
	for(Increment = Math.floor(n/2); 
		Increment > 0; 
		Increment = Math.floor(Increment/2)) {
		for(i = Increment; i < N; i++) {
			tmp = arr[i];
			for(j = i; j>=Increment && tmp<arr[j-Increment]; j-=Increment) {
				arr[j] = arr[j-Increment];
			}
			arr[j] = tmp;
		}
	}
	return arr;
}

var array = [45, 31, 2, 7, 88, 65, 37, 28];
var N = array.length;

console.log('sorted: ');
console.log(shell(array))