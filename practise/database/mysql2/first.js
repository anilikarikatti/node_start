let connect = require("./connect.js");

// console.log(connection.main);

async function getData(){

    let conn = await connect.main();
    // console.log(conn);

    let [rows] = await conn.execute('select * from students where age > ?',[100]);

    console.log(rows);

}

getData();