//your JS code here. If required.
const outputDiv = document.getElementById('output');
const tempArr = [1, 2, 3, 4];

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(tempArr); 
  }, 1000);
}) 
.then((arr) => {
  // Filter out odd numbers
  const evenArr = arr.filter((num) => num % 2 === 0);
  setTimeout(() => {
    outputDiv.innerText = evenArr.join(", ");
  }, 1000);
  return evenArr;
})
.then((evenArr) => {
  // Multiply even numbers by 2
  const finalArr = evenArr.map((num) => num * 2);
  setTimeout(() => {
    outputDiv.innerText = finalArr.join(", ");
  }, 2000);
  return finalArr;
});