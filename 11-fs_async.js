const {readFile, writeFile} = require('fs');

//Asynchronous read and write is useful when we have large files to handle, and it will take a lot of time to read them.
//In that case, we don't want to block the execution of other code while reading or writing files. => Non-blocking code.
// promises and async/await are other ways to handle asynchronous code in a more elegant way.

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    //console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result : ${first}, ${second}`, 
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    
    })
})
console.log('starting the next one');
