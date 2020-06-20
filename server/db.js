const Pool=require('pg').Pool;

const pool =new Pool({
    user:'postgres',
    host:'localhost',
    database:'todosapp',
    password:'deepak619',
    port:5432
});


module.exports=pool;