const {readFileSync, write, writeFileSync} = require('fs')

for (let i = 0; i < 1e6; i++) {
    writeFileSync('./content/bigfile.txt', `Hello world ${i}\n`, {flag: 'a'});
 }
