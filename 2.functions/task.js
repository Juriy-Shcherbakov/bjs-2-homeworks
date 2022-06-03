// Задание 1
function getArrayParams(arr) {
  let min = arr[0];                // назначение первого числа в массиве
  let max = arr[0];             // назначение первого числа в массиве
  let sum = 0;
  let avg;  
  
  for (let i = 0; i < arr.length; i++){
    if (min > arr[i]) {
    min = arr[i];          //сравнение и перезапись
    }
    if (max < arr[i]){
    max = arr[i];              //сравнение и перезапись
    }
    sum +=arr[i];
  }
  avg = Number ((sum / (arr.length)).toFixed(2));
  return { min: min, max: max, avg: avg };
}
//console.log(getArrayParams([1, 2, 3, -100, 10]));

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(worker([[1, 2], [2, 3]]))
function makeWork(arrOfArr, func) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arrOfArr.length; i ++) {
    sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
//console.log(makeWork(([[10, 20, 30], [-40, -50, -65]]), worker));

// Задание 3
function worker2(arr) { 
  let params = getArrayParams(arr);  //console.log(getArrayParams([1, 2, 3, -100, 10]));
  //                                                    {min: -100, max: 10, avg: -16.8}
  let difference = Math.abs(params.max - params.min);
  console.log(params.max);
  return difference;
}
//console.log(worker2([1, 2, 3, -100, 10]));