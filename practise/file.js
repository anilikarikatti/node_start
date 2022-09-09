const fs = require('fs');

function ans(){
   return new Promise((resolve, reject) => {
        let file = fs.open('./text1.txt','r',(err,fd)=>{
            if(!err){
                resolve(fd);
            }
            else{
                reject("no file")
            }
    });
        });
}
async function getfile(){
    let dat = await ans();
    console.log(dat);
}

getfile();