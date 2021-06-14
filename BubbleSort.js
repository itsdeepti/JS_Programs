const swap = (arr) => {
  let n = arr.length;
  let swap = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      if (arr[i] > arr[j]) {
        swap++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return swap;
}
console.log(swap([3, 2, 1]));

OR

const swap = (arr) => {
  let n = arr.length;
  let swap = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= (n - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        swap++;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(swap([3, 2, 1]));
