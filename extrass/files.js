const fs = require('fs')
//reading files

/*fs.readFile('./home/doc.txt',(error,data) => {
    if(error) {
        console.log(error);
    }
    console.log(data.toString());
}); */

//writing files

/*fs.writeFile('./home/doc.txt','hello monkeys',() => {
    console.log('data was written');
});*/

//directories
/*if(!fs.existsSync('./school')){
    fs.mkdir('./school',(error) =>{
        if(error) {
            console.log(error);
        }
        console.log('folder made');
    });
}
else{
    fs.rmdir('./school',(error) => {
        if(error) {
            console.log(error);
        }
        console.log('folder del');
    })
}*/

//deleting files

if(fs.existsSync('./school/hw.txt')){
    fs.unlink('./school/hw.txt',(error) => {
        if(error) {
            console.log(error);
        }
        console.log('file deleted');
    })
}

