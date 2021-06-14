 const factorial = (n) => {
   let mult = 1;
   for (let i = 1; i <= n; i++) {
     mult = mult * i;
   }
   return mult;
 }
 console.log(factorial(4));

 //Using while loop
 const factorial = (n) => {
   let mult = 1;
   let i = 1;
   while (i <= n) {
     mult = mult * i;
     i++;
   }
   return mult;
 }
 console.log(factorial(4));
