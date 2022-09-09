const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send(console.log("hello ak"));
    // process.kill(process.pid, 'SIGTERM');
    console.log(process.env.USER_ID);
});

app.listen(3000,()=>console.log("server is ready"))

// process.on('SIGTERM',()=>{
//     server.close(()=>{
//         console.log("process terminited");
//     process.exit();

//     })
// })