const fs = require('fs');

const readStream=fs.createReadStream('./docs/read.txt');

readStream.on('data',(chunk)=>{
    console.log("**********NEW CHUNK**********");
    console.log(chunk.toString());
});

// Read and write
// const writeStream=fs.createWriteStream('./docs/write.txt');
// readStream.on('data',(chunk)=>{
//     writeStream.write('\n**********NEW CHUNK**********\n');
//     writeStream.write(chunk);
// });

// PIPING 
// it is used when we have to read data and write the same data in some onother file similar to above code
// readStream.pipe(writeStream);