// const mysql = require('mysql');


// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : 'nisha',
//     database : 'crud-api' //database-name which we have created in the mysql
// });

// connection.connect(function(err){
//     if(err){
//         return console.log('error : ' +err.message);
//     }
//     console.log('database connected');
// });
// module.exports = connection;

const mysql = require('mysql');


//create here mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nisha',
  database: 'crud-api',
  insecureAuth: true
    });

connection.connect(function(err){
    if(err){
        return console.log('error : ' +err.message);
    }
    console.log('database connected');
});


    


    module.exports = connection;