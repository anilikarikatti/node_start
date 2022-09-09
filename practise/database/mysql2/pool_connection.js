let mysql = require('mysql2');

async function pool(){
    let connection = await mysql.createPool({
        host:"localhost",
        user:"root",
        password:"root",
        database:"practise_db",
        waitForConnections:true,
        connectionLimit:10,
        queueLimit:0
    });
    // console.log(connection); 
    return connection;
}

module.exports = {pool};

// pool();