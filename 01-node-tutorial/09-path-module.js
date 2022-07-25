const path = require('path')

console.log(`Separator: ${path.sep}`)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(`File Path: ${filePath}`)

const base = path.basename(filePath)
console.log(`Basename: ${base}`)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(`Absolute: ${absolute}`)
