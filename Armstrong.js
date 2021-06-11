const isArmstrong=(str)=>{
const numbers=str.split('');
let sum=0;
for(const number of numbers){
	const intNum=parseInt(number);
  const cube = intNum*intNum*intNum;
  sum=sum+cube;
}
console.log(sum.toString()==str);
    
}
isArmstrong('153');