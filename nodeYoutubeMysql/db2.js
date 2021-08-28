// Link::..:: https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
var mysql = require('mysql');

// Conexão com o
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud-node"
});

/** Select   
con.connect(function(erro) {
  if (erro) throw erro;
  con.query(" SELECT * FROM clientes", function (erro, result, fields) {
    if (erro) throw erro;
    console.log(result);
  });
});
*/
/** Insert   
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO clientes (nome, idade, uf) VALUES ('edson emanoel', 11, 'go')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
});
*/
/**Deletado por ID
con.connect(function(err) {
    if (err) throw err;
    var sql = " DELETE FROM clientes WHERE id = 4";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Cliente ID:  " + result.affectedRows);
    });
  });
*/
/** Update */
con.connect(function(err) {
    if (err) throw err;
    var sql = " UPDATE clientes SET id=6, nome ='Edson Emanoel Sousa Luis', idade =11, uf ='BA' WHERE id = 6 ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });


/** Select por Nome 
con.connect(function(err) {
    if (err) throw err;
    con.query(" SELECT * FROM clientes ORDER BY nome DESC", function (err, result) {
      if (err) throw err;
      //console.log(result);
    });
  });
*/