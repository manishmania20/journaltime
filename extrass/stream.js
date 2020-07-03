const fs = require('fs')

const readStream = fs.createReadStream('./home/doc2.txt', { encoding: 'utf8'})
const writeStream = fs.createWriteStream('./home/doc3.txt')

/*readStream.on('data',(chunk) => {
    //console.log('-------new chunk of data here------------')
    //console.log(chunk)
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk)
    console.log('write task done')
});*/

//piping is much shorter than the crap we did above

readStream.pipe(writeStream)

