const num1 = 5;
const num2 = 10;

function autoCall() {
  console.log("I will run when this module is imported");
}

function addValues() {
  console.log(`the sum is : ${num1 + num2}`);
}

function subtractValues() {
  console.log(`the diff is : ${num1 - num2}`);
}

autoCall();

module.exports = addValues;

