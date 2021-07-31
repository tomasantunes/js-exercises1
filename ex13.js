function selectionSort(arr){
  for(var i = 0; i < arr.length; i++){
    //store the smallest index
    var min = i; 
    for(var j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
       // update the smallest index
       min = j; 
      }
    }
    var tmp = arr[i];
    arr[i] = arr[min];
    arr[min] = tmp;
  }
  return arr;
};
var arr = [5, 8, 11, 6, 1, 9, 3];
selectionSort(arr);
console.log(arr);