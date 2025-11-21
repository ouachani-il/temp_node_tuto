const { connect } = require('http2');
const path = require('path');
console.log(path.sep); // to get the separator used by the operating system

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); // joins segments into a single path

const base = path.basename(filePath);
console.log(base); // gets the last part of the path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // gets the absolute path
console.log(__dirname); // current directory name