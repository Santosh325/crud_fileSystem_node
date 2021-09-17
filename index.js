const fs = require('fs');

// creaiting a file using --> mkdirSync
fs.mkdirSync('folder_one')

// creating a new file and writeing text using -->writeFileSync
fs.writeFileSync('folder_one/hello.txt','hello every one!')

// appending a text in existing file --> appendFileSync
fs.appendFileSync('folder_one/hello.txt', 'this is me...')

// reading a file using buffer data
const data = fs.readFileSync('folder_one/hello.txt');
console.log(data);


// reading a file without buffer data ---> here we are ugin utf8
const data = fs.readFileSync('folder_one/hello.txt', 'utf8');
console.log(data);


//renaming file
fs.renameSync('folder_one/','my_folder_one');

// to delete file
fs.unlinkSync('my_folder_one/hello.txt')


// to delete folder
fs.rmdirSync('my_folder_one');



