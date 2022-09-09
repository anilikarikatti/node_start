let mysql = require('./connect.js');

let sql = `create table students (
            id int primary key,
            name varchar(40),
            age int ,
            phone_number varchar(10),
            gender varchar(7));
    `

mysql.con.query(sql,(err,res)=>{
    if(err) throw err;

    console.log("table created");
})