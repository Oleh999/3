let mysql2 = require('mysql2');

let pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loon'
});
module.exports = pool;