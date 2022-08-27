const amount = 9;
let resolvedValue = 'not yet';

if (amount < 10) {
  console.log('small number');
} else {
  console.log('large number');
}

console.log(`hey it's my first node app!!!`);


let promise = new Promise (
  (resolve,reject) => {
    setTimeout(() => resolve('done!'),1000);
  }
)

promise.then(
  (result) => {
    resolvedValue = result;
    console.log(resolvedValue);
  }
);

console.log('Testing... Testing...');