const path = require("path");

console.log(path.sep)
// console.log(path)
const filePath = path.join('/content', 'generic.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'generic.txt')
console.log(absolute)