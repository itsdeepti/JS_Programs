// Upto n numbers
const isFibonacci = (n) => {
  const arr = [0, 1];
  for (i = 2; i <= n; i++) {
    const length = arr.length;
    const nextEle = arr[length - 1] + arr[length - 2];
    arr.push(nextEle);
  }
  console.log(arr);
}
isFibonacci(30);

//Upto n length 
const isFibonacci = (n) => {
  const arr = [0, 1];
  for (i = 2; arr.length <= n; i++) {
    const length = arr.length;
    const nextEle = arr[length - 1] + arr[length - 2];
    arr.push(nextEle);
  }
  console.log(arr);
}
isFibonacci(8);

//Using while loop
const isFibonacci = (n) => {
  const arr = [0, 1];
  let i = 2;
  while (i < n) {
    const length = arr.length;
    const nextEle = arr[length - 1] + arr[length - 2];
    arr.push(nextEle);
    i++;
  }
  console.log(arr);
}
isFibonacci(30);