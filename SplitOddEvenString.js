const oddEven = (str) => {
  const arr = str.split('');
  let even = '';
  let odd = '';
  for (const a in arr) {
    if (a % 2 == 0) {
      even = even + arr[a];
    } else {
      odd = odd + arr[a];
    }
  }
  console.log(even + ' ' + odd);
}
oddEven('Hacker');
