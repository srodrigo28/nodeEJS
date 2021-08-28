// Link::..:: https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
var mysql = require('mysql');

// Conexão com o
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud-node"
});

/** Select   */
con.connect(function(erro) {
  if (erro) throw erro;
  con.query(" SELECT * FROM clientes ", function (erro, result) {
    if (erro) throw erro;
    console.log(result);
  });
});