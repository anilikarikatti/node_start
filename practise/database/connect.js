let mysql = require('mysql');


let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database :"practise_db"
});

con.connect(function (err){
    if(err) throw err;
    console.log("connect!");
});

module.exports = {con};