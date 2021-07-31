function insertionSort(arr) {
  //number of elements in the array
  var len = arr.length;       
  var tmp, i, j;                  
  
  for(i = 1; i < len; i++) {
    //store the current value
    tmp = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > tmp) {
      // move the number
      arr[j+1] = arr[j]
      j--
    }
    //Inserts the temporary value at the correct position
    arr[j+1] = tmp
  }
  return arr
}
var arr = [5, 8, 11, 6, 1, 9, 3];
insertionSort(arr);
console.log(arr);