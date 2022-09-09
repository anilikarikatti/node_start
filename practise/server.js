const http = require('http');
// let cowsay = require('lodash')

// let cowsay = require('cowsay');

let fs = require('fs');

const port= 3000;

const host = "localhost";

let server = http.createServer((req,res)=>{
    res.write("hello world");
    // res.write("are you listening");
    // res.write(cowsay +"hello baby")
    // console.log(cowsay.say({
    //     text:"hello baby",
    //     e : "Oo",
    //     T:"U"
    // }));
    // fs.rename('tex.html','text.html',err =>{
    //     if(err){
    //         console.log(err);
    //     }
    // });

    fs.readFile('text.html',err=>{{
        if(err){
            console.log(err);
        }     
        else{
            let data = fs.readFile('text.html','utf-8')
            console.log(data);
        }
    }})
    res.end();
});

server.listen(port,host,()=>{
    console.log(`server listens : ${host}:${port}`)
})