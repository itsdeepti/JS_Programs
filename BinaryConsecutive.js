const binary = (n) => {
  const arr = n.toString(2);
  arr.split(' ');
  let maxCount = 0;
  let currentCount = 0;
  for (let a of arr) {
    if (a == 1) {
      currentCount = currentCount + 1;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;

    }
  }
  return maxCount;

}
console.log(binary(14));
