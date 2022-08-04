const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
console.log('first.txt has been read')

const second = readFileSync('./content/second.txt', 'utf8')
console.log('second.txt has been read')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second} \n`,
  { flag: 'a' }
)//flag: 'a' will cause append to result-sync.txt

console.log('done with this task')
console.log('starting the next one')
