let mysql = require('./connect.js');

let sql = "update students set name='jayadev' where id =1;"
mysql.con.query(sql,(err,res)=>{
    if(err) throw err;
    console.log("updated"); 

})