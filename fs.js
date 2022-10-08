const fs = require('node:fs');

fs.readFile('./input.txt','utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(result);
        fs.writeFile('./written.txt', result, (err) => {
            if(err){
                console.log(err);
                                return;
            }
        });
    }
});