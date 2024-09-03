//your JS code here. If required.
// const outputDiv = document.getElementById('output');
// const tempArr = [1, 2, 3, 4];

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(tempArr); 
//   }, 3000);
// }) 
// .then((arr) => {
//   // Filter out odd numbers
//   const evenArr = arr.filter((num) => num % 2 === 0);  //here its wrong
//   setTimeout(() => {
//     outputDiv.innerText = evenArr.join(", ");
//   }, 1000);
//   return evenArr;
// })
// .then((evenArr) => {
//   // Multiply even numbers by 2
//   const finalArr = evenArr.map((num) => num * 2);
//   setTimeout(() => {
//     outputDiv.innerText = finalArr.join(", ");
//   }, 2000);
//   return finalArr;
// });



function munipulateArray(){
	return new Promise((resolve) => {
		setTimeout(()=> {
			const array = [1,2,3,4];
			resolve(array);
		}, 3000);
	})
	.then ((array) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const evenNum = array.filter(num => num%2===0);
				document.getElementById('output').textContent = `Filtered array : ${evenNum}`
				resolve(evenNum);
			}, 1000);
		})
	})
	.then((evenNum) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const multipliedNum = evenNum.map(num=>num*2);
				document.getElementById('output').textContent = `Multiplied array : ${multipliedNum}`
				resolve(multipliedNum);
			}, 2000)
		})
	})
}
munipulateArray();