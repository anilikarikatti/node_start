let mysql = require('./connect.js');

console.log(mysql);

mysql.con.query("create database practise_db" ,(err,res)=>{
    if(err) console.log(err);
    console.log("database created");
    process.exit();
})