//your JS code here. If required.
const outputDiv = document.getElementById('output');

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
})
.then((arr) => {
  // Filter out odd numbers
  const evenArr = arr.filter((num) => num % 2 === 0);
  outputDiv.innerText = evenArr.join(", ");
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