
let mysql = require('mysql2/promise');

let connection;
async function main(){

     connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"practise_db"

    });
    // console.log(connection);
    return  connection;
}

// module.exports = {connection:main()}

module.exports= {main};