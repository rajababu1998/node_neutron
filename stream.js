const fs = require('fs');

const readStream = fs.createReadStream('./lib/log.txt','utf8');
const writeStream = fs.createWriteStream('./lib/log2.txt');

readStream.on('data',(chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
})

// readStream.pipe(writeStream);