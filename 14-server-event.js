const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//we have two methods on and emit one
customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`); // callback function
});
customEmitter.on('response', () => {
    console.log(`some other logic here`); // callback function
});

customEmitter.emit('response', 'john', 34) // emit after the on method to see the output

// we can also pass arguments to the emit method and receive them in the callback function
// customEmitter.on('response', (name, id) => {
//     console.log(`data received user ${name} with id: ${id}`); // callback function
// });