
// Reverse a String
// type 1
const revString = (str) => {
	const arr= str.split('');
	console.log(arr.reverse().join(''));
}

revString("deepti");

// type 2
const revString = (str) => {
	let reversed='';
	for(let c of str){
  	reversed = c + reversed;
  }
  console.log(reversed);
}

revString("deepti");
