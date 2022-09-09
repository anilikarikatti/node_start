let connect = require('./pool_connection.js');

async function getData(){
    let conn =await connect.pool();
    // console.log(conn);
    conn.query("select * from students",(err,rows,field)=>{
        console.log(rows);
    });
}

getData();