// CommonJS, every file is module bydefault
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
//console.log(names) //c'est un dictionnaire { john: 'john', peter: 'peter' }     
const data = require('./6-alternative_flavor') 
//console.log(data) //{ singlePerson: { name: 'bob' } }
require('./7-mindgrenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)  