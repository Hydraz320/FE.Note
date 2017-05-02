var InsertionSort = require('./insert.js');

function swap(A, i, j) {
	var tmp = A[i];
	A[i] = A[j];
	A[j] = tmp;
}

function median3(A, left, right) {
	var center = Math.floor((left + right)/2);
	if(A[left] > A[center]) swap(A, left, center);
	if(A[left] > A[right]) swap(A, left, right);
	if(A[center] > A[right]) swap(A, center, right);
	swap(A, center, right-1);
	return A[right-1]; // return pivot 
}

function qSort(A, left, right) {
	var CUTOFF = 3;
	var i, j;
	var pivot;
	if(left + CUTOFF <= right) {
		pivot = median3(A, left, right);
		i = left;
		j = right - 1;
		for( ; ; ) {
			while(A[++i] < pivot) {};
			while(A[--j] > pivot) {};
			if(i < j) {
				swap(A, i, j);
			} else {
				break;
			}
		}
		swap(A, i, right-1);
		qSort(A, left, i-1);
		qSort(A, i+1, right);
	} else {
		InsertionSort(A, left, right - left + 1);
	}
}

function quickSort(arr, n) {
	if(!Array.isArray(arr)) {
		throw Error('insert(): the given param is not an Array!');
	}
	if(typeof n !== "number") {
		n = arr.length;
	}
	qSort(arr, 0, n-1);
}

var array = [45, 31, 2, 7, 88, 65, 37, 28, 55, 23, 76, 21, 5];
var N = array.length;

console.log('sorted: ');
quickSort(array);
console.log(array);