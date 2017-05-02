function leftChild(i) {
	return 2*i + 1;
}

function percDown(A, i, N) {
	var child;
	var tmp;
	for(tmp = A[i]; leftChild(i)<N; i = child) {
		child = leftChild(i);
		if(child!=N-1 && A[child]<A[child+1]) {
			child++;
		}
		if(tmp < A[child]) {
			A[i] = A[child];
		} else {
			break;
		}
	}
	A[i] = tmp;
}

function swap(A, ai, bi) {
	var tmp = A[ai];
	A[ai] = A[bi];
	A[bi] = tmp;
}

function heap(arr, n) {
	if(!Array.isArray(arr)) {
		throw Error('shell(): the given param is not an Array!');
	}
	if(typeof n !== "number") {
		n = arr.length;
	}
	// BuildHeap
	for(var i = Math.floor(n/2); i>=0; i--) {
		percDown(arr, i, n);
	}
	// DeleteMin
	for(var i = n-1; i >= 0; i--) {
		swap(arr, 0, i);
		percDown(arr, 0, i);
	}
}

var array = [45, 31, 2, 7, 88, 65, 37, 28];
var N = array.length;

console.log('sorted: ');
heap(array);
console.log(array);