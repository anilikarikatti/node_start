let mysql = require('./connect.js');

let sql = "alter table students alter column email1 int;"


mysql.con.query(sql,(err,res)=>{
    if(err) throw err;
    console.log("table altered");
    process.exit();
})