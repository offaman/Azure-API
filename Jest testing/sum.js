const fs = require('fs')


const buffer = fs.readFileSync('getinfo.json')
data =  (JSON.parse(buffer.toString()))
console.log(data)
