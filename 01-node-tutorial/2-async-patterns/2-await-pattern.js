const { readFile, writeFile, stat } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('../content/first.txt', 'utf8')
    const second = await readFile('../content/second.txt', 'utf8')
    await writeFile(
      '../content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}\n`,
      { flag: 'a' }
    )
    console.log(first, second)
    console.log("Learn something about the file...")
    const stats = await stat('../content/first.txt')
    console.log(stats)
  } catch (error) {
    console.log(error)
  }
}

start()

console.log("Just showing the asynchronousity...")

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
