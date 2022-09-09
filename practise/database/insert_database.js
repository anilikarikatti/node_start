let mysql = require('./connect.js');


let sql = `insert into students values(1,"anil",23,'9876543210','m')`;

mysql.con.query(sql,(err,res)=>{
    if(err) throw err;
    console.log("values inserted");
    process.exit();
})