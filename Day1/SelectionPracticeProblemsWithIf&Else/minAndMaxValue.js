let arr = [];
for(let i = 0; i < 5; i++){
  arr[i] = Math.floor(Math.random() * 900) + 100;
}

let min = arr[0];
let max = arr[0];
for(let i = 0; i < 5; i++){
  if(arr[i] < min){
    min = arr[i];
  }

  if(arr[i] > max){
    max = arr[i];
  }
}

console.log("Minimum value is ", min);
console.log("Maximum value is ", max);