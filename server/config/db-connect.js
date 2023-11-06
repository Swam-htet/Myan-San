var mysql = require('mysql');
let config = {
    host: process.env.HOST,
    user: 'me',
    password: 'secret',
    database: 'my_db'
};

async function connectDB() {
    try {
        let connection = await mysql.createConnection(config);
        return connection;

    } catch (err) {
        console.log("Error - ", err);
    }
}

