function InsertionSort(arr, begin, length) {
	for(var P = 1; P < length; P++) {
		var tmp = arr[begin + P];
		for(var j = P; j>0 && tmp<arr[begin + j-1]; j--) {
			arr[begin + j] = arr[begin + j-1];
		}
		arr[begin + j] = tmp;
	}
}

module.exports = InsertionSort;