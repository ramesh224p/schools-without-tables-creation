var mysql = require('mysql');

const connection = mysql.createConnection({
    'host' : 'localhost',
    'user' : 'root',
    'password' : '0987',
    'database' : 'schools'
})

connection.connect(function(err){
    if(err){
        console.log(err);
    } else {
        console.log("database is Connected");
    }
})

module.exports = connection;
