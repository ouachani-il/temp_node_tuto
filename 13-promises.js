// npm -global command, comes with node
// npm --version

//const { install } = require("undici-types")

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

//const _ = require('lodash')

//const items = [1, [2, [3, [4]]]]
//const newItems = _.flattenDeep(items)
//console.log(newItems);
//console.log('Hello world');

//------------------------------------------------------------------------------------
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Welcome to our home page');
//     }
//     if (req.url === '/about') {
//         //blocking code
//         for (let i = 0 ; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) {
//                 console.log(`i: ${i} j: ${j}`);
//             }

//         }
//         res.end('Here is our short history');
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `);     

// });
 
// server.listen(5000, () => {
//     console.log('Server listening on port : 5000...');
// }); 

//------------------------------------------------------------------------------------

// const {readFile, writeFile} = require('fs');
const {readFile, writeFile} = require('fs').promises;
    // const util = require('util');
    // const readFilePromise = util.promisify(readFile);
    // const writeFilePromise = util.promisify(writeFile);
    
    
    const start = async() => {
        try {
            // const first = await readFilePromise('./content/first.txt', 'utf8');
            // const second = await readFilePromise('./content/second.txt', 'utf8');
            const first = await readFile('./content/first.txt', 'utf8');
            const second = await readFile('./content/second.txt', 'utf8');
            // await writeFilePromise(
            await writeFile(
                './content/result-mind-grenade.txt', 
                `This is awesome : ${first}, ${second}`
            ); 
            console.log(first, second);
        } catch (error) {
            
            console.log(error);
        }
    }
    start();
    //------------------------------------------------------------------------------------
    // getText('./content/first.txt')
    // .then(result => console.log(result))
    // .catch(err => console.log(err));
    //     const path = require('path');
    // const getText = (path) => {
    //     return new Promise((resolve, reject) => {
    //         readFile(path, 'utf8', (err, data) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(data);
    //             }
    //         }); 
    //     })
    // }
