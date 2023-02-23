async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:123456@mysqldb:3306/mydb");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}


async function selectPeople(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM people;');
    return rows;
}
 
module.exports = {selectPeople}