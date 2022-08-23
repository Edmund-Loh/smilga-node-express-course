const amount = 9

if (amount < 10) {
  console.log('small number')
} else {
  console.log('large number')
}

console.log(`hey it's my first node app!!!`)


let promise = new Promise (
  resolve => {
    setTimeout(() => resolve('done!'),1000)
  }
)

promise.then(
  (result) => {
    console.log(result)
  }
);

console.log('Testing... Testing...')