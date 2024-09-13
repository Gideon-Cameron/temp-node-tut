
const names = require('./1st-module')
const sayHi = require('./1st-module3')
const data = require('./1st-module4')
require('./1st-modul5')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

// Modules OS

const os = require('os')

// info about current user
const user = os.userInfo()
//method return the systems runtume in seconds
console.log(`the system runtime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS)