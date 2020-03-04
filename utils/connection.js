var mysql = require('mysql');

var con = mysql.createConnection({
    host: "103.238.203.168",
    user: "root",
    password: "hanyaadminyangtau",
    database: "c_erp_plant_sigk"
});

con.connect(function(err){
    if(err) throw err;
});

module.exports = con;